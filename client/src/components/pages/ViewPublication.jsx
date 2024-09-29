

import React, { useEffect, useState } from 'react';
import { Typography, Button, Card, CardContent, Grid, CircularProgress } from '@mui/material';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import '../../styles/ViewPublication.css'; // Add custom CSS for additional styling
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

const ViewPublication = ({ publicationId }) => {
  const { id } = useParams();
  const [publication, setPublication] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //     // useEffect(() => {
//     //     console.log('Fetching publication with ID:', publicationId);
//     //     const fetchPublication = async () => {
//     //     try {
//     //         // const response = await axios.get(`/api/publications/${publicationId}`);
//     //         const response = await axios.get(`http://localhost:8000/api/publications/${publicationId}`);
//     //         console.log(response);
//     //         setPublication(response.data);
//     //     } catch (err) {
//     //         setError(err);
//     //     } finally {
//     //         setLoading(false);
//     //     }
//     //     };

//     //     fetchPublication();
//     // }, [id]);

  useEffect(() => {
    const fetchPublication = async () => {
      if (!id) {
        console.error('Publication ID is undefined');
        return;
      }
      try {
        const response = await axios.get(`${API_BASE_URL}/api/publications/${id}`);
        setPublication(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPublication();
  }, [id]);

  if (loading) return <div className="loading-container"><CircularProgress /></div>;
  if (error) return <Typography variant="h6" color="error">Error fetching publication data.</Typography>;

  return (
    <div className="publication-container">
      <Button 
        variant="outlined" 
        onClick={() => window.history.back()}
        style={{ marginBottom: '20px', transition: '0.3s' }} 
        className="back-button"
      >
        &lt; Back to results
      </Button>

      <Typography variant="h4" gutterBottom className="fade-in">
        {publication.title}
      </Typography>

      <Grid container spacing={2} className="publication-details fade-in">
        <Grid item xs={12}>
          <Typography variant="body1"><strong>Journal:</strong> {publication.journal}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1"><strong>Treatment Used:</strong> {publication.treatmentUsed}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1"><strong>Number of Patients:</strong> {publication.numberOfPatients}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1"><strong>Published:</strong> {new Date(publication.published).toLocaleDateString()}</Typography>
        </Grid>
      </Grid>

      <div className="section">
        <Typography variant="h5" gutterBottom className="section-title">Summary</Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Summary:</strong> {publication.summary}
        </Typography>
        <Typography variant="body1">
          <strong>Conclusion:</strong> {publication.conclusion}
        </Typography>
      </div>

      <div className="section">
        <Typography variant="h5" gutterBottom className="section-title">Abstract</Typography>
        <Typography variant="body1">{publication.abstract}</Typography>
      </div>

      <Grid container spacing={3} className="fade-in">
        <Grid item xs={12}>
          <Card elevation={3} className="results-card">
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Results
              </Typography>
              <Typography variant="body1">
                {publication.results}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

// PropTypes for validation
ViewPublication.propTypes = {
  publicationId: PropTypes.string,
};

export default ViewPublication;

