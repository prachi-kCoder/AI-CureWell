from typing import List
from fastapi import FastAPI, HTTPException, Query
from pydantic import BaseModel
from fastapi.responses import JSONResponse
from functions import fetch_latest_advances, get_predicted_value, get_description, cure_patient

from fastapi.middleware.cors import CORSMiddleware
from data import advances_data, detailed_advances_data 
# for chatFeature
import cohere
from dotenv import load_dotenv
import os

# Load environment variables from .env
load_dotenv()

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://ai-curewell-clientside.onrender.com","http://localhost:5173"], 
    # allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods like POST, GET, etc.
    allow_headers=["*"],  # Allow all headers, including Content-Type
)

# Initialize Cohere client
cohere_api_key = os.getenv("COHERE_API_KEY")
if not cohere_api_key:
    raise ValueError("Cohere API key is missing!")

cohere_client = cohere.Client(cohere_api_key)


# Simulated vocabulary of known symptoms (you can extend this)
KNOWN_SYMPTOMS = {'itching', 'skin_rash', 'nodal_skin_eruptions', 'continuous_sneezing', 'shivering', 'chills', 'joint_pain', 'stomach_pain', 'acidity', 'ulcers_on_tongue', 'muscle_wasting', 'vomiting', 'burning_micturition', 'spotting_ urination', 'fatigue', 'weight_gain', 'anxiety', 'cold_hands_and_feets', 'mood_swings', 'weight_loss', 'restlessness', 'lethargy', 'patches_in_throat', 'irregular_sugar_level', 'cough', 'high_fever', 'sunken_eyes', 'breathlessness', 'sweating', 'dehydration', 'indigestion', 'headache', 'yellowish_skin', 'dark_urine', 'nausea', 'loss_of_appetite', 'pain_behind_the_eyes', 'back_pain', 'constipation', 'abdominal_pain', 'diarrhoea', 'mild_fever', 'yellow_urine', 'yellowing_of_eyes', 'acute_liver_failure', 'fluid_overload', 'swelling_of_stomach', 'swelled_lymph_nodes', 'malaise', 'blurred_and_distorted_vision', 'phlegm', 'throat_irritation', 'redness_of_eyes', 'sinus_pressure', 'runny_nose', 'congestion', 'chest_pain', 'weakness_in_limbs', 'fast_heart_rate', 'pain_during_bowel_movements', 'pain_in_anal_region', 'bloody_stool', 'irritation_in_anus', 'neck_pain', 'dizziness', 'cramps', 'bruising', 'obesity', 'swollen_legs', 'swollen_blood_vessels', 'puffy_face_and_eyes', 'enlarged_thyroid', 'brittle_nails', 'swollen_extremeties', 'excessive_hunger', 'extra_marital_contacts', 'drying_and_tingling_lips', 'slurred_speech', 'knee_pain', 'hip_joint_pain', 'muscle_weakness', 'stiff_neck', 'swelling_joints', 'movement_stiffness', 'spinning_movements', 'loss_of_balance', 'unsteadiness', 'weakness_of_one_body_side', 'loss_of_smell', 'bladder_discomfort', 'foul_smell_of urine', 'continuous_feel_of_urine', 'passage_of_gases', 'internal_itching', 'toxic_look_(typhos)', 'depression', 'irritability', 'muscle_pain', 'altered_sensorium', 'red_spots_over_body', 'belly_pain', 'abnormal_menstruation', 'dischromic _patches', 'watering_from_eyes', 'increased_appetite', 'polyuria', 'family_history', 'mucoid_sputum', 'rusty_sputum', 'lack_of_concentration', 'visual_disturbances', 'receiving_blood_transfusion', 'receiving_unsterile_injections', 'coma', 'stomach_bleeding', 'distention_of_abdomen', 'history_of_alcohol_consumption', 'fluid_overload.1', 'blood_in_sputum', 'prominent_veins_on_calf', 'palpitations', 'painful_walking', 'pus_filled_pimples', 'blackheads', 'scurring', 'skin_peeling', 'silver_like_dusting', 'small_dents_in_nails', 'inflammatory_nails', 'blister', 'red_sore_around_nose', 'yellow_crust_ooze'}

# Define the request body structure using Pydantic
class SymptomCheckRequest(BaseModel):
    symptoms: list[str]

class SymptomCheckResponse(BaseModel):
    disease: str
    description: str
    
class Advance(BaseModel):
    id: int
    title: str
    journal: str
    publishedDate: str  # Can use datetime instead, but string for simplicity
    condition: str
    treatmentUsed: str
    url: str
    
class ChatRequest(BaseModel):
    user_input: str

class ChatResponse(BaseModel):
    response: str

# Root route
@app.get("/")
async def root():
    return {"message": "Welcome to FastApi CureWell Backend !!"}

@app.post("/symptom-check/", response_model=SymptomCheckResponse)
async def symptom_check(request: SymptomCheckRequest):
    # Validate symptoms
    print(f"request.symptoms = {request.symptoms}")
    invalid_symptoms = [symptom for symptom in request.symptoms if symptom.lower() not in KNOWN_SYMPTOMS]
    if invalid_symptoms:
        raise HTTPException(
            status_code=400, 
            detail=f"Invalid symptoms: {', '.join(invalid_symptoms)}. Please check your input."
        )
    try:
        predicted_disease = get_predicted_value(request.symptoms)
        disease_description = get_description(predicted_disease)
        return SymptomCheckResponse(disease=predicted_disease, description=disease_description)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

    


@app.get("/cure/{disease}")
async def get_cure_route(disease: str):
    try:
        precautions, medications, diets, instructions = cure_patient(disease)
        
        return {
            "disease": disease,
            "precautions": precautions,  # List of precautions
            "medications": medications,   # List of medications
            "diets": diets,               # List of diets
            "instructions": instructions   # List of instructions
        }
    except ValueError as e:
        raise HTTPException(status_code=404, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))



@app.get("/api/latest-advances", response_model=List[Advance])
async def get_latest_advances(condition: str = Query(..., description="Medical condition")):
    # Filter the advances based on the condition
    filtered_advances = [advance for advance in advances_data if advance['condition'].lower() == condition.lower()]
    
    # Return the filtered list or an empty list if no match found
    return JSONResponse(content=filtered_advances)



# Route to get detailed information about a specific publication by ID
@app.get("/api/publications/{publication_id}", response_model=dict)
async def get_publication_details(publication_id: int):
    # Find the publication by ID
    publication = next((pub for pub in detailed_advances_data if pub['id'] == publication_id), None)
    if publication is not None:
        return JSONResponse(content=publication)
    else:
        return JSONResponse(content={"error": "Publication not found"}, status_code=404)


# New Chatbot Endpoint

@app.post("/chat/", response_model=ChatResponse)
async def chatbot_response(chat_request: ChatRequest):
    user_message = chat_request.user_input.strip()
    
    if not user_message:
        raise HTTPException(status_code=400, detail="User input cannot be empty.")
    
    # Define the prompt for Cohere
    prompt = (
        f"User: {user_message}\n"
        "As an empathetic healthcare assistant, analyze the user's tone and provide a personalized and supportive response."
        "\nAssistant:"
    )
    
    try:
        # Generate response using Cohere
        response = cohere_client.generate(
            model='command-xlarge-nightly',  # Choose an appropriate model
            prompt=prompt,
            max_tokens=150,
            temperature=0.7,
            stop_sequences=["\nUser:", "\nAssistant:"],
        )
        
        if not response or not response.generations:
            raise HTTPException(status_code=500, detail="No response from Cohere API")
        
        assistant_reply = response.generations[0].text.strip()
        
        return ChatResponse(response=assistant_reply)
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error generating response: {str(e)}")     
    
    
    