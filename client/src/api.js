const API_BASE_URL = "http://localhost:8000";

export const checkSymptoms = async (selectedSymptoms) => {
    // const lowercaseSymptoms = selectedSymptoms.map(symptom => symptom.toLowerCase());
    const response = await fetch(`${API_BASE_URL}/symptom-check/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ symptoms: selectedSymptoms }),
    });
    if (!response.ok) {
        const errorData = await response.json();
        console.error("Error from server:", errorData.detail);
        return;
    }

    const data = await response.json();
    console.log("Predicted Disease:", data.disease);
    console.log("Description:", data.description);
    if (response.ok) {
        return { disease: data.disease, description: data.description };
    } else {
        throw new Error(data.detail || "Something went wrong!");
    }
};
