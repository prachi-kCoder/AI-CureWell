
import React from 'react';
import { Box, Typography, Grid, Paper, useTheme } from '@mui/material';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import ScienceIcon from '@mui/icons-material/Science';
import PeopleIcon from '@mui/icons-material/People';

const About = () => {
  const theme = useTheme(); // Use theme to maintain consistency with the rest of the app

  return (
    <Box sx={{ padding: 3, background: `linear-gradient(135deg, ${theme.palette.background.default}, ${theme.palette.background.paper})`, borderRadius: 2 }}>
      <Typography variant="h4" color="primary" gutterBottom sx={{ textAlign: 'center', transition: 'color 0.3s' }}>
        About CureWell
      </Typography>
      <Typography variant="body1" color="textSecondary" sx={{ marginBottom: 4, textAlign: 'center', transition: 'color 0.3s' }}>
        At CureWell, we believe that early detection and continuous health tracking can save lives. Our AI-powered health tracking system is designed to provide real-time insights, making it easier to diagnose and treat diseases at the right time.
      </Typography>

      {/* Highlight the importance of health tracking, ML models, and expert collaboration */}
      <Grid container spacing={4}>
        {/* Early Detection */}
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              padding: 2,
              textAlign: 'center',
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.15)'
              }
            }}
            elevation={3}
          >
            <HealthAndSafetyIcon
              fontSize="large"
              sx={{
                color: theme.palette.primary.main,
                transition: 'color 0.3s, transform 0.3s',
                '&:hover': { color: theme.palette.secondary.main, transform: 'rotate(15deg)' }
              }}
            />
            <Typography variant="h6" sx={{ marginTop: 2, fontWeight: 'bold', transition: 'color 0.3s' }}>
              Early Detection, Better Outcomes
            </Typography>
            <Typography variant="body2" sx={{ transition: 'color 0.3s', marginTop: 1 }}>
              Monitor key health metrics regularly to ensure diseases are detected early for timely treatment and better outcomes.
            </Typography>
          </Paper>
        </Grid>

        {/* AI-Powered Diagnosis */}
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              padding: 2,
              textAlign: 'center',
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.15)'
              }
            }}
            elevation={3}
          >
            <ScienceIcon
              fontSize="large"
              sx={{
                color: theme.palette.primary.main,
                transition: 'color 0.3s, transform 0.3s',
                '&:hover': { color: theme.palette.secondary.main, transform: 'rotate(15deg)' }
              }}
            />
            <Typography variant="h6" sx={{ marginTop: 2, fontWeight: 'bold', transition: 'color 0.3s' }}>
              AI-Powered Diagnosis
            </Typography>
            <Typography variant="body2" sx={{ transition: 'color 0.3s', marginTop: 1 }}>
              Our ML models provide accurate predictions and personalized health insights based on extensive medical research.
            </Typography>
          </Paper>
        </Grid>

        {/* Expertise You Can Trust */}
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              padding: 2,
              textAlign: 'center',
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.15)'
              }
            }}
            elevation={3}
          >
            <PeopleIcon
              fontSize="large"
              sx={{
                color: theme.palette.primary.main,
                transition: 'color 0.3s, transform 0.3s',
                '&:hover': { color: theme.palette.secondary.main, transform: 'rotate(15deg)' }
              }}
            />
            <Typography variant="h6" sx={{ marginTop: 2, fontWeight: 'bold', transition: 'color 0.3s' }}>
              Expertise You Can Trust
            </Typography>
            <Typography variant="body2" sx={{ transition: 'color 0.3s', marginTop: 1 }}>
              Collaborating with expert doctors and surgeons to ensure your health is managed with the highest standard of care.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Final message about commitment */}
      <Typography variant="h5" color="primary" sx={{ marginTop: 5, textAlign: 'center', transition: 'color 0.3s' }}>
        Our Commitment
      </Typography>
      <Typography variant="body1" color="textSecondary" sx={{ marginTop: 1, textAlign: 'center', transition: 'color 0.3s' }}>
        We are committed to combining technology and medical expertise to deliver the best possible healthcare experience.
      </Typography>
    </Box>
  );
};

export default About;

