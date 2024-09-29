

import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import { styled } from '@mui/system';

const BannerContainer = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(5),
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  backgroundImage: 'url(/path-to-your-image.jpg)', // Add a relevant background image
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
  overflow: 'hidden',
}));

const Overlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Add a dark overlay for better text readability
}));

const BannerContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
}));

const Banner = () => {
  return (
    <BannerContainer>
      <Overlay />
      <BannerContent>
        <Typography variant="h4" gutterBottom>
          When your health gets complicated, we help you find better care, faster.
        </Typography>
        
      </BannerContent>
    </BannerContainer>
  );
};

export default Banner;

