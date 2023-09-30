import { createTheme ,responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#007bff', 
    },
    secondary: {
      main: '#ba68c8', 
    },
    
  },
  typography: {
    // Customize typography settings
  },
  // ... other theme options
});
theme = responsiveFontSizes(theme);
export default theme;
