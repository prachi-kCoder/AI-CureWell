import React from 'react';
import { Box, Typography, Avatar, Grid, Paper, Button } from '@mui/material';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import EngineeringIcon from '@mui/icons-material/Engineering';

const Developer = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" color="primary" gutterBottom>
        Meet the Team Behind CureWell
      </Typography>

      {/* Highlight the developers and the tech team */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 2, textAlign: 'center' }}>
            <DeveloperModeIcon fontSize="large" color="primary" />
            <Typography variant="h6" sx={{ marginTop: 1 }}>
              Innovation and Development
            </Typography>
            <Typography variant="body2">
              Our developers work tirelessly to create user-friendly applications and machine learning models to provide a seamless healthcare experience. Their passion drives our innovation.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 2, textAlign: 'center' }}>
            <EngineeringIcon fontSize="large" color="primary" />
            <Typography variant="h6" sx={{ marginTop: 1 }}>
              Tech and Support Team
            </Typography>
            <Typography variant="body2">
              The tech and support teams ensure our services are always up-to-date and reliable, making healthcare accessible to those in need.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Developer highlight */}
      <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 4 }}>
        <Avatar sx={{ width: 56, height: 56, marginRight: 2 }}>JD</Avatar>
        <Box>
          <Typography variant="h6" color="textPrimary">
            John Doe
          </Typography>
          <Typography variant="body2" color="textSecondary">
            John Doe is one of our dedicated developers specializing in web development and machine learning. His expertise and innovation have been integral in creating CureWell’s core features.
          </Typography>
        </Box>
      </Box>

      {/* Connect with developers */}
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="body1" color="textSecondary">
          Want to learn more or need guidance on technology? Connect with our developers for insights and support!
        </Typography>
        <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
          Connect with Developers
        </Button>
      </Box>
    </Box>
  );
};

export default Developer;
