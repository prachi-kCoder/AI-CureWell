import React from 'react';
import { Box, Typography, Avatar, Grid, Paper, Button } from '@mui/material';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Developer = () => {
  return (
    <Box sx={{ padding: 3, backgroundColor: '#f5f5f5', borderRadius: 2 }}>
      <Typography variant="h4" color="primary" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
        Meet the Team Behind CureWell
      </Typography>

      {/* Highlight the developers and the tech team */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              padding: 3,
              textAlign: 'center',
              '&:hover': { boxShadow: 4, transform: 'scale(1.02)', transition: '0.3s' },
            }}
          >
            <DeveloperModeIcon fontSize="large" color="primary" />
            <Typography variant="h6" sx={{ marginTop: 2, fontWeight: 'medium' }}>
              Innovation and Development
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={{ marginTop: 1 }}>
              Our developers work tirelessly to create user-friendly applications and machine learning models to provide a seamless healthcare experience. Their passion drives our innovation.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              padding: 3,
              textAlign: 'center',
              '&:hover': { boxShadow: 4, transform: 'scale(1.02)', transition: '0.3s' },
            }}
          >
            <EngineeringIcon fontSize="large" color="primary" />
            <Typography variant="h6" sx={{ marginTop: 2, fontWeight: 'medium' }}>
              Tech and Support Team
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={{ marginTop: 1 }}>
              The tech and support teams ensure our services are always up-to-date and reliable, making healthcare accessible to those in need.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Developer highlight */}
      <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 4 }}>
        <Avatar
          sx={{
            width: 64,
            height: 64,
            marginRight: 2,
            backgroundColor: 'primary.main',
            fontSize: 24,
            '&:hover': { transform: 'scale(1.05)', transition: '0.3s' },
          }}
        >
          JD
        </Avatar>
        <Box>
          <Typography variant="h6" color="textPrimary" sx={{ fontWeight: 'bold' }}>
            John Doe
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ fontStyle: 'italic' }}>
            John Doe is one of our dedicated developers specializing in web development and machine learning. His expertise and innovation have been integral in creating CureWell’s core features.
          </Typography>
        </Box>
      </Box>

      {/* Connect with developers */}
      <Box sx={{ marginTop: 4, textAlign: 'center' }}>
        <Typography variant="body1" color="textSecondary" sx={{ marginBottom: 2 }}>
          Want to learn more or need guidance on technology? Connect with our developers for insights and support!
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            padding: 1.5,
            '&:hover': { backgroundColor: 'secondary.main', transform: 'scale(1.05)', transition: '0.3s' },
          }}
          endIcon={<ArrowForwardIcon />}
        >
          Connect with Developers
        </Button>
      </Box>
    </Box>
  );
};

export default Developer;
