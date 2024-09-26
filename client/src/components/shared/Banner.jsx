import React from 'react';
import { Typography, Box } from '@mui/material';

const Banner = () => {
  return (
    <Box textAlign="center" p={5} bgcolor="primary.main" color="white">
      <Typography variant="h4">
        When your health gets complicated, we help you find better care, faster.
      </Typography>
    </Box>
  );
};

export default Banner;
