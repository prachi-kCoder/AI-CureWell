// import { useState } from 'react';
// import { Box, Typography } from '@mui/material';
// import Precautions from './Precautions';
// import Medications from './Medications';
// import Diets from './Diets';
// import Instructions from './Instructions';

// const DiseaseCure = () => {
//   return (
//     <Box p={5}>
//       <Typography variant="h4" color="primary">
//         Disease Cure
//       </Typography>
//       <Typography>
//         This section helps you search for diseases based on symptoms...
//       </Typography>
//     </Box>
//   );
// };

// export default DiseaseCure;


import { useState } from 'react';
import { Box, Typography, TextField, Button, Grid } from '@mui/material';
import Precautions from './Precautions';
import Medications from './Medications';
import Diets from './Diets';
import Instructions from './Instructions';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const DiseaseCure = () => {
  const [disease, setDisease] = useState('');
  const [data, setData] = useState(null);

  const handleFetchData = async () => {
    if (disease) {
      const response = await fetch(`${API_BASE_URL}/cure/${disease}`);
      const result = await response.json();
      setData(result);
    }
  };

  return (
    <Box p={5}>
      <Typography variant="h4" color="primary">
        Disease Cure
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Know more about disease and make the required changes in your lifestyle ..
      </Typography>

      <TextField
        label="Enter Disease Name"
        variant="outlined"
        fullWidth
        value={disease}
        onChange={(e) => setDisease(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleFetchData}
        sx={{ mb: 4 }}
      >
        Get Cure Information
      </Button>

      {data && (
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Precautions precautions={data.precautions} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Medications medications={data.medications} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Diets diets={data.diets} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Instructions instructions={data.instructions} />
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default DiseaseCure;
