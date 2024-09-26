import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import App from './App.jsx'
import './index.css'

const theme = createTheme({
  palette: {
    primary: {
      main: '#2a2b5e',
    },
    secondary: {
      main: '#d32f2f',
    },
  },
});

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
)
