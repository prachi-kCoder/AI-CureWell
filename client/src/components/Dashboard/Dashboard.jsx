
import React, { useState } from 'react';
import { Button, IconButton, Stepper, Step, StepLabel, Typography, TextField, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const categories = [
  { label: "General Information", questions: ["Height", "Weight"] },
  { label: "Identity and Location", questions: ["Sex", "Ethnicity", "Preferred Food"] },
  { label: "Food and Exercise", questions: ["Balanced Diet", "Regular Exercise"] },
  { label: "Medical History", questions: ["Do you have any medical history?"] },
];

const Dashboard = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    height: '',
    weight: '',
    sex: '',
    ethnicity: '',
    food: '',
    balancedDiet: '',
    exercise: '',
    medicalHistory: '',
    chronicAilment: '',
    ongoingMedication: ''
  });
  const [showMedicalFields, setShowMedicalFields] = useState(false);
  const navigate = useNavigate();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleMedicalChange = (e) => {
    const value = e.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      medicalHistory: value
    }));
    setShowMedicalFields(value === 'Yes');
  };

  const handleSubmit = () => {
    // Redirect to a dashboard page and display the user data summary
    navigate('/dashboard-summary', { state: formData });
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar for progress tracking */}
      <div style={{ width: '20%', padding: '20px', backgroundColor: '#F5F5F5' }}>
        <Typography variant="h6">Progress Tracker</Typography>
        <Stepper activeStep={activeStep} orientation="vertical">
          {categories.map((category, index) => (
            <Step key={index}>
              <StepLabel>{category.label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>

      {/* Main content area */}
      <div style={{ width: '80%', padding: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h5">{categories[activeStep].label}</Typography>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
        </div>

        {/* Quiz question display */}
        <div style={{ marginTop: '20px' }}>
          {activeStep === 0 && (
            <>
              <TextField
                label="Height (ft/in)"
                name="height"
                value={formData.height}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Weight (lb)"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
            </>
          )}

          {activeStep === 1 && (
            <>
              <TextField
                label="Sex"
                name="sex"
                value={formData.sex}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Ethnicity"
                name="ethnicity"
                value={formData.ethnicity}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Preferred Food"
                name="food"
                value={formData.food}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
            </>
          )}

          {activeStep === 2 && (
            <>
              <RadioGroup
                name="balancedDiet"
                value={formData.balancedDiet}
                onChange={handleChange}
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Balanced Diet" />
                <FormControlLabel value="No" control={<Radio />} label="Unbalanced Diet" />
              </RadioGroup>
              <RadioGroup
                name="exercise"
                value={formData.exercise}
                onChange={handleChange}
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Exercise Regularly" />
                <FormControlLabel value="No" control={<Radio />} label="No Regular Exercise" />
              </RadioGroup>
            </>
          )}

          {activeStep === 3 && (
            <>
              <Typography variant="h6">Medical History</Typography>
              <RadioGroup name="medicalHistory" value={formData.medicalHistory} onChange={handleMedicalChange}>
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>

              {showMedicalFields && (
                <>
                  <TextField
                    label="Chronic Ailments"
                    name="chronicAilment"
                    value={formData.chronicAilment}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                  />
                  <TextField
                    label="Ongoing Medication"
                    name="ongoingMedication"
                    value={formData.ongoingMedication}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                  />
                </>
              )}
            </>
          )}

          <div style={{ marginTop: '20px' }}>
            {activeStep > 0 && (
              <Button onClick={handleBack} variant="contained" color="secondary">
                Back
              </Button>
            )}
            {activeStep < categories.length - 1 ? (
              <Button onClick={handleNext} variant="contained" color="primary">
                Next
              </Button>
            ) : (
              <Button onClick={handleSubmit} variant="contained" color="primary">
                Submit
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
