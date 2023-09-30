import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AppBar, Container, Toolbar, Typography, Button, FormControl, Select, MenuItem } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
//i18n langauge detector
import { useTranslation, Trans } from 'react-i18next';
import '../../../i18n';
//css 
import './header.style.scss';
//pageRouter
import { ADD_USER, SIGN_UP, LOGIN } from '../../../common/helpers/PageRoutes';


const Header = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState('en');
  const navigate = useNavigate();

  const userAllDetail: string | null = localStorage.getItem("loginuser");
  const userSigning = userAllDetail ? JSON.parse(userAllDetail) : null;
  const userName = userSigning ? userSigning.name : null;

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [i18n, language]);

  const handleLogout = () => {
    localStorage.removeItem('loginuser'); // Remove the authentication token
    navigate('/login'); // Redirect to the login page
  };

  return (
    <>
      {
        localStorage.getItem('loginuser') ?

          <AppBar position="static" color="default" sx={{ marginBottom: '1rem', display: 'flex', flexFlow: 'column wrap-reverse' }}>
            <Container>
              <Toolbar >
                <Typography variant="h6" component="div">
                  <Trans i18nKey="Heading">CRUD in Redux-ToolKit with Redux-Thunk!</Trans>
                  <h4>Welcome {userName}</h4>                  
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: 'green',
                    color: 'white',
                    marginLeft: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                  onClick={() => {
                    navigate(ADD_USER);
                  }}
                >
                  <Trans i18nKey="Addbtn">AddUser</Trans> <AddIcon sx={{ marginLeft: '0.5rem' }} />
                </Button>
                <FormControl  sx={{ marginLeft: "2rem",marginRight:"2rem" }} color='primary'>
                  <Select
                    labelId="lang-label"
                    id="lang"
                    value={language}
                    onChange={(e) => { setLanguage(e.target.value); }}
                  >
                    <MenuItem value="en">English</MenuItem>
                    <MenuItem value="hi">Hindi</MenuItem>
                  </Select>
                </FormControl>
                <Button variant='outlined' color="inherit" onClick={handleLogout}>LogOut </Button>
              </Toolbar>
            </Container>
          </AppBar>

          :

          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Welcome!!
              </Typography>
              <Button color="inherit" component={Link} to={SIGN_UP}>
                Sign Up
              </Button>
              <Button color="inherit" component={Link} to={LOGIN}>
                Login
              </Button>
            </Toolbar>
          </AppBar>

      }

    </>
  );
};

export default Header;