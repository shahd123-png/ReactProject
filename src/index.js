import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/AppPage/App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: 
    {
      main: 'rgba(147, 125, 194, 1)', 
    },

    secondary: 
    {
      main: 'rgba(147, 125, 194, 0.6)', 
    },

    customColor: {
      main: 'rgba(198, 137, 198, 1)', 
    },
  },


  typography: {
    h1:{
      fontFamily: 'Inter',
      fontSize: 48,
    },
    p:{
      fontFamily: 'Inter',
      fontSize: 16,
      fontWeight: 400
    }

  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <ThemeProvider theme={theme}>
  
  <App />
  
  </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
