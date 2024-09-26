import React from 'react';
import { Box, TextField, Button } from '@mui/material';

const SearchBar = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" p={3}>
      <TextField
        variant="outlined"
        placeholder="Enter a condition or procedure"
        style={{ width: '50%' }}
      />
      <Button variant="contained" color="secondary" style={{ marginLeft: '10px' }}>
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
