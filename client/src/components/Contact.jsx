import React from 'react';
import { Box, Typography, TextField, Button, Grid, Paper } from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

const Contact = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" color="primary" gutterBottom>
        We’re here for You 24/7
      </Typography>

      {/* Highlight key features */}
      <Grid container spacing={2} sx={{ marginBottom: 3 }}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: 2, textAlign: 'center' }}>
            <SupportAgentIcon fontSize="large" color="primary" />
            <Typography variant="h6" sx={{ marginTop: 1 }}>
              24/7 Dedicated Support
            </Typography>
            <Typography variant="body2">
              Our health service team is here to assist you anytime, ensuring continuous care until your condition improves.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: 2, textAlign: 'center' }}>
            <AccessTimeIcon fontSize="large" color="primary" />
            <Typography variant="h6" sx={{ marginTop: 1 }}>
              Real-time Assistance
            </Typography>
            <Typography variant="body2">
              We are always available to help and guide you, no matter when you need us.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: 2, textAlign: 'center' }}>
            <NotificationsActiveIcon fontSize="large" color="primary" />
            <Typography variant="h6" sx={{ marginTop: 1 }}>
              Never Miss a Reminder
            </Typography>
            <Typography variant="body2">
              With our automated reminders, you'll always stay on track with your health tasks and check-ins.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Contact form */}
      <Typography variant="h5" color="textPrimary" sx={{ marginBottom: 2 }}>
        Get in Touch with Us
      </Typography>
      <Box component="form" sx={{ marginTop: 2 }} noValidate autoComplete="off">
        <TextField label="Name" variant="outlined" fullWidth sx={{ marginBottom: 2 }} />
        <TextField label="Email" variant="outlined" fullWidth sx={{ marginBottom: 2 }} />
        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          placeholder="How can we assist you? Feel free to ask any questions."
          sx={{ marginBottom: 3 }}
        />
        <Button variant="contained" color="primary" size="large" fullWidth sx={{ padding: 1.5 }}>
          Send Message
        </Button>
      </Box>
    </Box>
  );
};

export default Contact;
