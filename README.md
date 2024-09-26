# AI-CureWell
Unleash your health potential with our app! Enter your symptoms for smart disease predictions using advanced machine learning. Get tailored advice, precautions, and medications, plus easily find nearby hospitals and book appointments. Your health journey starts now!


![SymtomCheck](https://github.com/user-attachments/assets/ac9038d9-3489-4e16-b56e-fdc3ee82acc6)
![DiseaseCure](https://github.com/user-attachments/assets/eafa78ff-83f0-4a5c-b5da-066b89158135)
![Mapping](https://github.com/user-attachments/assets/fab333ae-516a-4cfc-8051-3f5ea5d81e19)
![Booking and Nearby(Hospital)](https://github.com/user-attachments/assets/f9b1873e-7c59-4606-99ce-a273b553e222)


## Setup Instructions
### Client (React-Vite) Setup
Clone the repository:

  (bash)
  git clone <repository-url>
  cd <repository-name>/client
  Install dependencies:


  npm install
  Create a .env file: In the client folder, create a .env file and add the following line with your TomTom API key:


  VITE_LOCATION_API=your_tomtom_api_key
  Start the development server:
  npm run dev
  
###Server (FastAPI) Setup
  Navigate to the server directory:
  cd <repository-name>/server
  Set up a virtual environment:


  python -m venv venv
  Activate the virtual environment:

(On Windows):
  venv\Scripts\activate
(On macOS/Linux:)
  source venv/bin/activate
Install dependencies:

  pip install -r requirements.txt
  
Run the FastAPI server:
  uvicorn main:app --reload
  
Getting an API Key
  To use location services, you will need to obtain an API key from TomTom:

### Go to the TomTom Developer Portal.
1)Sign up or log in to your account.
2)Create a new project and navigate to the "API Keys" section.
3)Copy your API key and paste it into your .env file as described above.

### Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your changes.
