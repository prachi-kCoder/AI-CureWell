import React from 'react';
import { useLocation } from 'react-router-dom';
import { Typography } from '@mui/material';

const DashboardSummary = () => {
  const location = useLocation();
  const data = location.state;

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4">Your Information Summary</Typography>
      
      <Typography variant="h6" style={{ marginTop: '20px' }}>General Information</Typography>
      <p>Height: {data.height}</p>
      <p>Weight: {data.weight}</p>

      <Typography variant="h6" style={{ marginTop: '20px' }}>Identity and Location</Typography>
      <p>Sex: {data.sex}</p>
      <p>Ethnicity: {data.ethnicity}</p>
      <p>Preferred Food: {data.food}</p>

      <Typography variant="h6" style={{ marginTop: '20px' }}>Food and Exercise</Typography>
      <p>Balanced Diet: {data.balancedDiet}</p>
      <p>Regular Exercise: {data.exercise}</p>

      <Typography variant="h6" style={{ marginTop: '20px' }}>Medical History</Typography>
      <p>Medical History: {data.medicalHistory}</p>
      {data.medicalHistory === 'Yes' && (
        <>
          <p>Chronic Ailment: {data.chronicAilment}</p>
          <p>Ongoing Medication: {data.ongoingMedication}</p>
        </>
      )}
    </div>
  );
};

export default DashboardSummary;
