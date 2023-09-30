import './App.css';
// theme
import { ThemeProvider } from '@mui/material';
import theme from './theme';
//components
import {UserRoutes} from './routing/UserRoutes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <UserRoutes/>     
    </ThemeProvider>
  );
}

export default App;
