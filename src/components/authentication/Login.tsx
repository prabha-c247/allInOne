import React, { useState } from 'react';
import { TextField, Button, Grid, Paper, FormControlLabel, Checkbox } from '@mui/material';
import {useNavigate, Navigate } from 'react-router-dom';
import { HOME_PAGE } from '../../common/helpers/PageRoutes';

interface Users {
  name: string;
  email: string;
  pwd: string;
}

const Login: React.FC = () => {
  const paperStyle = { padding: 20, height: '70vh', width: 280, margin: '20px auto' };

  const [userLogin, setUserLogin] = useState<Users>({
    name: '',
    email: '',
    pwd: '',
  });

  const navigate = useNavigate();

  const onInputChanged = (fieldName: string, value: string) => {
    setUserLogin((prev) => ({ ...prev, [fieldName]: value }));
  };

  const login = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('loginuser', JSON.stringify(userLogin));
    navigate(HOME_PAGE);
  };

  // To match the user details with already registered user
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('loginuser', 'true');
    const loggedUser = JSON.parse(localStorage.getItem('loginuser') || '{}');
    if (userLogin.email === loggedUser.email && userLogin.pwd === loggedUser.pwd) {
      return <Navigate to={HOME_PAGE} />;
    } else {
      alert('Wrong email and password');
    }
  };

  return (
    <form onSubmit={handleLogin}>           
      <Grid container justifyContent="center">
        <Paper elevation={10} style={paperStyle}>
          <Grid container justifyContent="center">
            <h2>Login</h2>
          </Grid>
          <TextField
            id="name"
            label="Name"
            variant="standard"
            value={userLogin.name}
            onChange={(e) => {
              onInputChanged('name', e.target.value);
            }}
            fullWidth
            required
          />
          <TextField
            id="email"
            label="Email"
            variant="standard"
            value={userLogin.email}
            onChange={(e) => {
              onInputChanged('email', e.target.value);
            }}
            fullWidth
            required
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            variant="standard"
            value={userLogin.pwd}
            onChange={(e) => {
              onInputChanged('pwd', e.target.value);
            }}
            fullWidth
            required
          />
          <FormControlLabel
            control={<Checkbox name="rememberMe" color="primary" />}
            label="Remember me"
          />
          <Button variant="contained" color="primary" type="submit" fullWidth onClick={login}>
            Login
          </Button>
        </Paper>
      </Grid>
    </form>
  );
};

export default Login;
