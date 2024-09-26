
import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link for navigation

const features = [
  {
    name: 'Symptom Checker',
    icon: '/disease-finder.png', // path relative to the public folder
    route: '/symptom-checker',  // route path
  },
  {
    name: 'Disease Cure',
    icon: '/disease-cure.svg',
    route: '/disease-cure', // route path
  },
  {
    name: 'Locate Doctor',
    icon: '/locate-doctor.svg',
    route: '/locate-doctor', // route path
  },
];

const Features = () => {
  return (
    <Box p={5}>
      <Grid container spacing={3} justifyContent="center">
        {features.map((feature) => (
          <Grid item key={feature.name}>
            {/* Use feature.route for correct routing */}
            <Link to={feature.route} style={{ textDecoration: 'none', color: 'inherit' }}>
              <Box textAlign="center">
                <img
                  src={feature.icon}
                  alt={feature.name}
                  style={{ width: '50px', height: '50px' }} // adjust icon size
                />
                <Typography color="textPrimary">{feature.name}</Typography>
              </Box>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Features;
