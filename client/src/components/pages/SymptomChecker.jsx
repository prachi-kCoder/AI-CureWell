
import React, { useState } from 'react';
import { Box, Typography, Button, TextField ,Card, CardContent} from '@mui/material';
import { checkSymptoms } from '../../api';  // Import the API handling file

const SymptomChecker = () => {
    const [selectedSymptoms, setSelectedSymptoms] = useState("");
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const handleSymptomCheck = async () => {
        try {
            const symptomsArray = selectedSymptoms.split(",").map(symptom => symptom.trim()).filter(symptom => symptom !== "");
            
            // Ensure that the array is not empty
            if (symptomsArray.length === 0) {
                setError("Please enter at least one symptom.");
                return;
            }

            const response = await checkSymptoms(symptomsArray);
            setResult(response);
            setError(null); 
            } catch (err) {
                setError(err.message);
                setResult(null);  // Clear previous result if there is an error
            }
    };

    return (
        <Box p={5}>
            <Typography variant="h4" color="primary">
                Symptom Checker
            </Typography>
            <Typography>
                Enter your symptoms separated by commas:
            </Typography>
            <TextField 
                fullWidth
                placeholder="e.g., headache, fatigue, nausea"
                value={selectedSymptoms}
                onChange={(e) => setSelectedSymptoms(e.target.value)}
                variant="outlined"
                margin="normal"
            />
            <Button variant="contained" color="primary" onClick={handleSymptomCheck}>
                Check Symptoms
            </Button>

            {/* {result && (
                <Box mt={3}>
                    <Typography variant="h6">Predicted Disease:</Typography>
                    <Typography>{result.disease}</Typography>
                    <Typography variant="h6">Description:</Typography>
                    <Typography>{result.description}</Typography>
                </Box>
            )} */}
            {result && (
                <Card variant="outlined" sx={{ mt: 3, p: 2, bgcolor: '#f9f9f9', borderRadius: '8px' }}>
                    <CardContent>
                        <Typography variant="h6" color="primary">
                            Predicted Disease:
                        </Typography>
                        <Typography variant="body1" fontWeight="bold" sx={{ mb: 1 }}>
                            {result.disease}
                        </Typography>
                        <Typography variant="h6" color="secondary">
                            Description:
                        </Typography>
                        <Typography variant="body2">
                            {result.description}
                        </Typography>
                    </CardContent>
                </Card>
            )}

            {error && (
                <Typography color="error" mt={2}>
                    {error}
                </Typography>
            )}
        </Box>
    );
};

export default SymptomChecker;
