import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { AvatarGroup } from '@mui/material';
import { borderRadius } from '@mui/system';
import Navbar from  './Navbar.css'

const pages = ['Home','Find Jobs', 'Find Candidates', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    
    <AppBar position="static" sx={{background:'#AFDCEC'}}>    {/* Different Colors {#38ACEC   #82CAFA   #AFDCEC} */}
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              letterSpacing: '.3rem',
              color: 'Black',
              textDecoration: 'none',
            }}
          >

            <Typography>
              <Box></Box>
            </Typography>
              
            Job
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              letterSpacing: '.3rem',
              color: 'red',
              textDecoration: 'none',
            }}
          >
            Portal
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              // fontWeight: 700,
              // letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Portal
          </Typography>
          <Box sx={{ marginLeft:10, flexGrow: 1, display: {  xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button className="btn"             
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ marginRight:2 , my: 2, color: 'black', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

            {/* <a href="#">Login</a> */}

          <Box sx={{ flexGrow: 0 }}>
            <Button variant="text" sx={{color:'black', marginRight:'100'}}> Login </Button>
            <Button variant="contained" sx={{background:'#4540DB',}}> Register </Button>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {/* <AvatarGroup max={4}>
                  <Avatar alt="Jenny Sharp" src="/Jenny.jpg" />
                  <Avatar alt="John Sharp" src="/John.jpg" />
                  <Avatar alt="Peter Sharp" src="/Peter.jpg" />
                  <Avatar alt="Shaun Sharp" src="/Shaun.jpg" />
                  <Avatar alt="Sheela Sharp" src="/Sheela.jpg" />
                  <Avatar alt="lock Sharp" src="/lock.png" />
                </AvatarGroup> */}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
