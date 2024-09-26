// import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material'; // Social media icons from MUI

const Footer = () => {
  return (
    <Box 
      p={3} 
      textAlign="center" 
      bgcolor="lightgray" // Better background color for a professional look
      color="white"
      sx={{
        position: 'relative',
        bottom: 0,
        width: '100%',
        marginTop: 'auto',
        boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.1)',
        transition: 'background-color 0.3s ease-in-out', // Smooth background color transition
      }}
    >
      <Typography variant="body1" sx={{ marginBottom: '10px',color:'#f94449' }}>
        © 2024 Your Company. All rights reserved.
      </Typography>

      {/* Social Media Handles with transitions */}
      <Box display="flex" justifyContent="center" alignItems="center" gap={2}>
        <IconButton 
          component="a" 
          href="https://facebook.com" 
          target="_blank" 
          sx={{ 
            color: 'white', 
            '&:hover': { 
              color: '#3b5998', // Facebook blue
              transform: 'scale(1.2)', 
              transition: 'transform 0.3s ease, color 0.3s ease'
            }
          }}
        >
          <Facebook />
        </IconButton>
        <IconButton 
          component="a" 
          href="https://twitter.com" 
          target="_blank" 
          sx={{ 
            color: 'white', 
            '&:hover': { 
              color: '#1DA1F2', // Twitter blue
              transform: 'scale(1.2)',
              transition: 'transform 0.3s ease, color 0.3s ease'
            }
          }}
        >
          <Twitter />
        </IconButton>
        <IconButton 
          component="a" 
          href="https://instagram.com" 
          target="_blank" 
          sx={{ 
            color: 'white', 
            '&:hover': { 
              color: '#C13584', // Instagram gradient
              transform: 'scale(1.2)',
              transition: 'transform 0.3s ease, color 0.3s ease'
            }
          }}
        >
          <Instagram />
        </IconButton>
        <IconButton 
          component="a" 
          href="https://linkedin.com" 
          target="_blank" 
          sx={{ 
            color: 'white', 
            '&:hover': { 
              color: '#0077B5', // LinkedIn blue
              transform: 'scale(1.2)',
              transition: 'transform 0.3s ease, color 0.3s ease'
            }
          }}
        >
          <LinkedIn />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
