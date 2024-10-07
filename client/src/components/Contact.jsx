import React from 'react';
import { Box, Typography, TextField, Button, Grid, Paper, IconButton } from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

const Contact = () => {
  return (
    <Box sx={{ padding: 3 }}>
      {/* Header */}
      <Typography variant="h4" color="primary" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
        We’re here for You 24/7
      </Typography>

      {/* Key Features with enhanced icons */}
      <Grid container spacing={4} sx={{ marginBottom: 3 }}>
        <Grid item xs={12} md={4}>
          <Paper 
            sx={{ 
              padding: 3, 
              textAlign: 'center', 
              transition: 'transform 0.3s ease-in-out', 
              '&:hover': { transform: 'scale(1.05)' }, 
              background: 'linear-gradient(135deg, #f3f4f6, #e0f7fa)' 
            }}
          >
            <IconButton aria-label="support" color="primary" sx={{ fontSize: 50 }}>
              <SupportAgentIcon fontSize="inherit" />
            </IconButton>
            <Typography variant="h6" sx={{ marginTop: 1, fontWeight: 'bold' }}>
              24/7 Dedicated Support
            </Typography>
            <Typography variant="body2" sx={{ color: '#555' }}>
              Our health service team is here to assist you anytime, ensuring continuous care until your condition improves.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper 
            sx={{ 
              padding: 3, 
              textAlign: 'center', 
              transition: 'transform 0.3s ease-in-out', 
              '&:hover': { transform: 'scale(1.05)' }, 
              background: 'linear-gradient(135deg, #f3f4f6, #e0f7fa)' 
            }}
          >
            <IconButton aria-label="time" color="primary" sx={{ fontSize: 50 }}>
              <AccessTimeIcon fontSize="inherit" />
            </IconButton>
            <Typography variant="h6" sx={{ marginTop: 1, fontWeight: 'bold' }}>
              Real-time Assistance
            </Typography>
            <Typography variant="body2" sx={{ color: '#555' }}>
              We are always available to help and guide you, no matter when you need us.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper 
            sx={{ 
              padding: 3, 
              textAlign: 'center', 
              transition: 'transform 0.3s ease-in-out', 
              '&:hover': { transform: 'scale(1.05)' }, 
              background: 'linear-gradient(135deg, #f3f4f6, #e0f7fa)' 
            }}
          >
            <IconButton aria-label="reminders" color="primary" sx={{ fontSize: 50 }}>
              <NotificationsActiveIcon fontSize="inherit" />
            </IconButton>
            <Typography variant="h6" sx={{ marginTop: 1, fontWeight: 'bold' }}>
              Never Miss a Reminder
            </Typography>
            <Typography variant="body2" sx={{ color: '#555' }}>
              With our automated reminders, you'll always stay on track with your health tasks and check-ins.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Contact Form */}
      <Typography variant="h5" color="primary" sx={{ marginBottom: 2, textAlign: 'center', fontWeight: 'bold' }}>
        Get in Touch with Us
      </Typography>
      <Box component="form" sx={{ marginTop: 2 }} noValidate autoComplete="off">
        <TextField 
          label="Name" 
          variant="outlined" 
          fullWidth 
          sx={{ marginBottom: 2 }} 
          InputLabelProps={{ style: { color: '#757575' } }} 
        />
        <TextField 
          label="Email" 
          variant="outlined" 
          fullWidth 
          sx={{ marginBottom: 2 }} 
          InputLabelProps={{ style: { color: '#757575' } }} 
        />
        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          placeholder="How can we assist you? Feel free to ask any questions."
          sx={{ marginBottom: 3 }}
          InputLabelProps={{ style: { color: '#757575' } }}
        />
        <Button 
          variant="contained" 
          color="primary" 
          size="large" 
          fullWidth 
          sx={{ padding: 1.5, fontSize: 18, transition: 'background-color 0.3s ease', '&:hover': { backgroundColor: '#0288d1' } }}
        >
          Send Message
        </Button>
      </Box>
    </Box>
  );
};

export default Contact;
