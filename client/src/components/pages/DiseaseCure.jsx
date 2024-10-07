
// import { useState } from 'react';
// import { Box, Typography, TextField, Button, Grid } from '@mui/material';
// import Precautions from './Precautions';
// import Medications from './Medications';
// import Diets from './Diets';
// import Instructions from './Instructions';

// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000' ;

// const DiseaseCure = () => {
//   const [disease, setDisease] = useState('');
//   const [data, setData] = useState(null);

//   const handleFetchData = async () => {
//     if (disease) {
//       const response = await fetch(`${API_BASE_URL}/cure/${disease}`);
//       const result = await response.json();
//       setData(result);
//     }
//   };

//   return (
//     <Box p={5}>
//       <Typography variant="h4" color="primary">
//         Disease Cure
//       </Typography>
//       <Typography variant="body1" sx={{ mb: 4 }}>
//         Know more about disease and make the required changes in your lifestyle ..
//       </Typography>

//       <TextField
//         label="Enter Disease Name"
//         variant="outlined"
//         fullWidth
//         value={disease}
//         onChange={(e) => setDisease(e.target.value)}
//         sx={{ mb: 2 }}
//       />
//       <Button 
//         variant="contained" 
//         color="primary" 
//         onClick={handleFetchData}
//         sx={{ mb: 4 }}
//       >
//         Get Cure Information
//       </Button>

//       {data && (
//         <Grid container spacing={4}>
//           <Grid item xs={12} sm={6}>
//             <Precautions precautions={data.precautions} />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <Medications medications={data.medications} />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <Diets diets={data.diets} />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <Instructions instructions={data.instructions} />
//           </Grid>
//         </Grid>
//       )}
//     </Box>
//   );
// };

// export default DiseaseCure;


import { useState } from 'react';
import { Box, Typography, TextField, Button, Grid, Paper, Card, CardContent } from '@mui/material';
import Precautions from './Precautions';
import Medications from './Medications';
import Diets from './Diets';
import Instructions from './Instructions';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

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
    <Box p={4} sx={{ backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <Paper elevation={3} sx={{ padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '12px' }}>
        <Typography variant="h3" color="primary" sx={{ fontWeight: 'bold', mb: 2 }}>
          Disease Cure
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ fontStyle: 'italic', mb: 4 }}>
          Know more about disease and make the required changes in your lifestyle.
        </Typography>

        <TextField
          label="Enter Disease Name"
          variant="outlined"
          fullWidth
          value={disease}
          onChange={(e) => setDisease(e.target.value)}
          sx={{
            mb: 3,
            '.MuiOutlinedInput-root': {
              borderRadius: '12px',
            },
          }}
        />
        <Button
          variant="contained"
          color="secondary"
          onClick={handleFetchData}
          sx={{
            mb: 4,
            padding: '10px 20px',
            borderRadius: '8px',
            backgroundColor: '#5c6bc0',
            '&:hover': {
              backgroundColor: '#3f51b5',
            },
          }}
        >
          Get Cure Information
        </Button>
      </Paper>

      {data && (
        <Grid container spacing={2} sx={{ mt: 4 }}> {/* Reduced spacing to 2 */}
          <Grid item xs={12} sm={6}>
            <Card elevation={3} sx={{ borderRadius: '16px' }}>
              <CardContent>
                <Precautions precautions={data.precautions} />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card elevation={3} sx={{ borderRadius: '16px' }}>
              <CardContent>
                <Medications medications={data.medications} />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card elevation={3} sx={{ borderRadius: '16px' }}>
              <CardContent>
                <Diets diets={data.diets} />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card elevation={3} sx={{ borderRadius: '16px' }}>
              <CardContent>
                <Instructions instructions={data.instructions} />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default DiseaseCure;
