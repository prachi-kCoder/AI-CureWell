import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Card, CardContent, Grid, Box } from '@mui/material';
import axios from 'axios';
import '../../styles/LatestAdvances.css';  // Import the custom CSS file
import { Link } from 'react-router-dom'; 

const LatestAdvances = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [advances, setAdvances] = useState([]);
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Fetch latest advances based on user condition
  const fetchAdvances = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:8000/api/latest-advances`, {
        params: { condition: searchTerm },
      });
      console.log(response);
      setAdvances(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error('Error fetching latest advances:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Latest Advances in Medical Treatments
      </Typography>

      <Box display="flex" alignItems="center" mb={3}>
        <TextField
          label="Enter Your Condition"
          variant="outlined"
          value={searchTerm}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={fetchAdvances}
          disabled={loading || !searchTerm}
          style={{ marginLeft: '10px' }}
        >
          {loading ? 'Loading...' : 'Search Advances'}
        </Button>
      </Box>

      <Grid container spacing={2} style={{ marginTop: '20px' }}>
        {advances.length > 0 ? (
          advances.map((advance) => (
            <Grid item xs={12} md={6} key={advance.id} className="card-grid-item">
              <Card className="advance-card" variant="outlined">
                <CardContent>
                  <div className="icon-container">
                    <img src="/research-paper.svg" alt="Research Paper" className="research-icon" />
                  </div>
                  <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                    {advance.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Condition: {advance.condition}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Journal: {advance.journal}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Treatment Used: {advance.treatmentUsed}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Published: {new Date(advance.publishedDate).toLocaleDateString()}
                  </Typography>
                  {/* <Button variant="outlined" color="primary" href={advance.url} target="_blank" style={{ marginTop: '10px' }}>
                    View Publication
                  </Button> */}
                  <Link to={`/publications/${advance.id}`}>
                    <Button variant="outlined" color="primary" style={{ marginTop: '10px' }}>
                      View Publication
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="body2" color="textSecondary" style={{ marginTop: '20px', textAlign: 'center' }}>
            No advances found. Please try a different condition.
          </Typography>
        )}
      </Grid>
    </Container>
  );
};

export default LatestAdvances;
