
import React from 'react';
import { Box, Grid, Typography, Card, CardContent, Button } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link for navigation

const features = [
  {
    name: 'Symptom Checker',
    icon: '/disease-finder.png',
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
  {
    name: 'Latest Advances', // New feature
    icon: '/LatestAdvances.svg',
    route: '/latest-advances',  // route to the dedicated page
  },
  {
    name: 'Chatbot', // New Chatbot feature
    icon: '/chatbot-icon.svg', // Ensure you have a chatbot icon in your public folder
    route: '/chatbot',  // New route path
  }
];
const benefits = [
  {
    title: 'Proactive Preventive Care',
    description: 'Utilize predictive analytics and expert advice to identify and manage health risks early, ensuring your long-term wellness.',
    icon: 'Care.png', // Replace with actual path
  },
  {
    title: 'Tailored Health Solutions',
    description: 'Get personalized plans and strategies, available 24/7 to seamlessly fit your lifestyle.',
    icon: 'protected.png', // Replace with actual path
  },
  {
    title: 'In-Depth Health Insights',
    description: 'Gain actionable insights to make informed decisions about your well-being.',
    icon: 'insights.png', // Replace with actual path
  },
];

const Features = () => {
  return (
    <>
    <Box p={5}>
      <Grid container spacing={3} justifyContent="center">
        {features.map((feature) => (
          <Grid item key={feature.name}>
            <Link to={feature.route} style={{ textDecoration: 'none', color: 'inherit' }}>
              <Box 
                textAlign="center"
                sx={{
                  transition: 'transform 0.3s',
                  '&:hover': { transform: 'scale(1.1)' },
                }}
              >
                <img
                  src={feature.icon}
                  alt={feature.name}
                  style={{ width: '50px', height: '50px' }} 
                />
                <Typography color="textPrimary">{feature.name}</Typography>
              </Box>
            </Link>
          </Grid>
        ))}
      </Grid>
      </Box>
      <Box p={5}>
      {/* Benefits Section */}
      <Typography variant="h4" align="center" gutterBottom>
        Benefits of AI Health Assistant
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {benefits.map((benefit, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ boxShadow: 2, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
              <CardContent>
                <img src={benefit.icon} alt={benefit.title} style={{ width: '50px', height: '50px' }} />
                <Typography variant="h6" gutterBottom>{benefit.title}</Typography>
                <Typography variant="body2">{benefit.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box my={4} textAlign="center">
        <Button variant="contained" color="primary" size="large" component={Link} to="/signup">
          Try CureWell for Free
        </Button>
      </Box>
    </Box>
  </>
  );
};

export default Features;
