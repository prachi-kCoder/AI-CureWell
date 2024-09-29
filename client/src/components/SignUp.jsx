import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Grid, Card, CardContent, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate async sign-up process
    setTimeout(() => {
      setLoading(false);
      // Redirect or handle success
      alert('Sign-Up Successful!');
    }, 2000);
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh', background: '#f4f6f9' }}>
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Card elevation={6} sx={{ borderRadius: '20px', padding: '20px' }}>
          <CardContent>
            <Typography variant="h4" align="center" gutterBottom>
              Join CureWell Today!
            </Typography>
            <Typography variant="body2" align="center" color="textSecondary" gutterBottom>
              Sign up now and gain access to personalized health insights.
            </Typography>

            {/* Sign-Up Form */}
            <form onSubmit={handleSubmit}>
              <Box mb={2}>
                <TextField
                  fullWidth
                  label="Name"
                  variant="outlined"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </Box>
              <Box mb={2}>
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </Box>
              <Box mb={2}>
                <TextField
                  fullWidth
                  label="Password"
                  variant="outlined"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </Box>

              <Box mt={3} mb={2}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  disabled={loading}
                  sx={{ py: 1.5, fontSize: '1rem', fontWeight: 'bold', borderRadius: '30px' }}
                >
                  {loading ? <CircularProgress size={24} color="inherit" /> : 'Sign Up'}
                </Button>
              </Box>
            </form>

            <Typography variant="body2" align="center" mt={2}>
              Already have an account?{' '}
              <Link to="/login" style={{ color: '#1976d2', textDecoration: 'none' }}>
                Log in
              </Link>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default SignUp;
