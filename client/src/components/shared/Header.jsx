
import React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, InputBase, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const theme = useTheme(); // Access the current theme
  const navigate = useNavigate(); 
  const handleAccountClick = () => {
    navigate('/dashboard'); // Programmatically navigate to Dashboard
  };
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: theme.palette.primary.main,
        padding: '10px 0',
        color: 'white',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Left Side: Logo and Title */}
        <Box display="flex" alignItems="center">
          <img
            src="/logo-well.svg"
            alt="CureWell Logo"
            style={{ height: '50px', marginRight: '10px' }}
          />
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              color: theme.palette.secondary.light,
            }}
          >
            CureWell
          </Typography>
        </Box>

        {/* Center: Navigation Links */}
        <Box display="flex" alignItems="center" gap={3}>
          <Button component={Link} to="/" sx={{ color: 'white' }}>
            Home
          </Button>
          <Button component={Link} to="/about" sx={{ color: 'white' }}>
            About
          </Button>
          <Button component={Link} to="/developer" sx={{ color: 'white' }}>
            Developer
          </Button>
          <Button component={Link} to="/contact" sx={{ color: 'white' }}>
            Contact Us
          </Button>
        </Box>

        {/* Right Side: Search Bar and Profile Icon */}
        <Box display="flex" alignItems="center">
          <Box
            sx={{
              backgroundColor: theme.palette.background.paper,
              padding: '2px 10px',
              borderRadius: theme.shape.borderRadius,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <SearchIcon />
            <InputBase
              placeholder="Search…"
              sx={{ ml: 1, flex: 1, color: theme.palette.text.primary }}
            />
          </Box>

          {/* <IconButton color="inherit" sx={{ ml: 2 } }>
            <AccountCircle />
          </IconButton> */}
          <IconButton color="inherit" sx={{ ml: 2 }} onClick={handleAccountClick}>
            <AccountCircle />
          </IconButton>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={() => navigate('/login')}
            sx={{
              background: 'linear-gradient(45deg, #8e44ad 30%, #ff6b6b 90%)', // Dark violet to light red
              py: 1,
              fontSize: '0.7rem',
              fontWeight: 'bold',
              color: '#fff', // Ensuring text color is white for better contrast
              borderRadius: '25px',
              '&:hover': {
                background: 'linear-gradient(45deg, #732d91 30%, #e74c3c 90%)', // Darker shades for hover effect
              },
              transition: 'background 0.3s ease-in-out', // Smooth transition
            }}
          >
            Log In
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

