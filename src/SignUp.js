import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { rootShouldForwardProp } from '@mui/material/styles/styled';
import Divider from '@mui/material/Divider';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://omnisoftex.com/">
        Omnisoftex Inc
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };


  return (

    <ThemeProvider theme={theme} justifyContent='center' >

      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          flexWrap: 'wrap',
          alignItems: 'center',
          width:'100%'
        }}
      >
        <Typography component="h1" variant="h3" sx={{textAlign:'center'}}>
            Create a Free Account
        </Typography>
        <Typography component="p" variant="body1" sx={{mt:1, mb:2, textAlign:'center'}}>
            Already have an Account?
            <Link
              component="button"
              variant="body1"
              sx={{ml: 1}}
              onClick={() => {
                console.info("Call the Login Component.");
              }}
            >
              Login
            </Link>
        </Typography>
      </Box>

      <Grid container spacing={2} justifyContent='center' sx={{alignItems:'center'}}>
        <Grid item xs={12} sm={10} md={6} lg={4} xl={6}>
          <Item>
            <TextField
              margin="normal"
              required
              fullWidth
              id="firstName"
              label="First Name"
              name="firstName"
              autoComplete="firstName"
              autoFocus
            />
          </Item>
          <Item>
            <TextField
              margin="normal"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="lastName"
            />
          </Item>
          <Item>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
          </Item>
          <Item>
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
          </Item>
          
          <Item>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Make my profile public to increase my visibility to employers"
            />
          </Item>
          <Item>
            <Button
              variant="outlined"
              component="label"
              sx={{mr: 3}}
            >
              Upload your CV
              <input
                type="file"
                hidden
              />
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Proceed to build your CV
            </Button>
            
          </Item>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
          <Grid>
            <Item>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Continue with Google
              </Button>
            </Item>
          </Grid>

          <Grid item xs = {12} sm={12}>
            <Item>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Continue with Facebook
              </Button>
            </Item>
          </Grid>

          <Grid >
            <Item>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Continue with Apple
              </Button>
            </Item>
          </Grid>

          <Grid>
            <Item>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Continue with LinkedIn
              </Button>
            </Item>
          </Grid>
        </Grid>
      </Grid>
      <Divider sx={{mt:10}}> </Divider>
    </ThemeProvider>
    
    
  );
}