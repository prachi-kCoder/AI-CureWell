
import React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, InputBase, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  const theme = useTheme(); // Access the current theme

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

          <IconButton color="inherit" sx={{ ml: 2 }}>
            <AccountCircle />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

