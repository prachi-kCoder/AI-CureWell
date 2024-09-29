import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import ScienceIcon from '@mui/icons-material/Science';
import PeopleIcon from '@mui/icons-material/People';

const About = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" color="primary" gutterBottom>
        About CureWell
      </Typography>
      <Typography variant="body1" color="textSecondary" sx={{ marginBottom: 4 }}>
        At CureWell, we believe that early detection and continuous health tracking can save lives. Our AI-powered health tracking system is designed to provide real-time insights, making it easier to diagnose and treat diseases at the right time.
      </Typography>

      {/* Highlight the importance of health tracking, ML models, and expert collaboration */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: 2, textAlign: 'center' }}>
            <HealthAndSafetyIcon fontSize="large" color="primary" />
            <Typography variant="h6" sx={{ marginTop: 1 }}>
              Early Detection, Better Outcomes
            </Typography>
            <Typography variant="body2">
              Our health tracking system allows you to monitor key health metrics regularly, ensuring diseases are detected early for timely treatment and better results.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: 2, textAlign: 'center' }}>
            <ScienceIcon fontSize="large" color="primary" />
            <Typography variant="h6" sx={{ marginTop: 1 }}>
              AI-Powered Diagnosis
            </Typography>
            <Typography variant="body2">
              Our machine learning models are built on extensive medical research data, providing accurate predictions and personalized health insights for each patient.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: 2, textAlign: 'center' }}>
            <PeopleIcon fontSize="large" color="primary" />
            <Typography variant="h6" sx={{ marginTop: 1 }}>
              Expertise You Can Trust
            </Typography>
            <Typography variant="body2">
              We collaborate with real-time experts, qualified doctors, and surgeons to ensure that your health is managed with the highest standard of care.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Final message about commitment */}
      <Typography variant="h5" color="primary" sx={{ marginTop: 4 }}>
        Our Commitment
      </Typography>
      <Typography variant="body1" color="textSecondary" sx={{ marginTop: 1 }}>
        We are committed to combining the power of technology and medical expertise to deliver the best possible healthcare experience. Whether you’re tracking your health or seeking treatment, CureWell is here to guide you every step of the way.
      </Typography>
    </Box>
  );
};

export default About;
