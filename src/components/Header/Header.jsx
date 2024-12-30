import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import profileimg from '../../assets/images/profile.png';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs';

const pages = ['Home', 'Tech', 'Project', 'Contact'];
const socialLinks = [
  { name: 'LinkedIn', icon: <BsLinkedin />, link: 'https://www.linkedin.com/in/chathupa-chamika-/' },
  { name: 'GitHub', icon: <BsGithub />, link: 'https://github.com/ChathupaChamika' },
  { name: 'Facebook', icon: <BsFacebook />, link: 'https://web.facebook.com/chathupa.chamika.7' },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#000', boxShadow: 'none' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo or Title */}
          <Typography
  variant="h6"
  component="a"
  href="#home"
  sx={{
    mr: 2,
    display: { xs: 'none', md: 'flex' },
    fontFamily: 'monospace',
    fontWeight: 700,
    letterSpacing: '.3rem',
    color: 'white',
    textDecoration: 'none',
    fontSize: '2rem',
    position: 'relative',
    textShadow: '0 0 5px #fff, 0 0 10px #42a5f5, 0 0 20px #478ed1, 0 0 30px #3b82f6',
    transition: 'color 0.3s ease, transform 0.3s ease',
    animation: 'neon-glow 2s infinite alternate',
    '&:hover': {
      transform: 'scale(1.1)',
      textShadow: '0 0 10px #ec4899, 0 0 20px #a855f7, 0 0 30px #3b82f6',
    },
    '@keyframes neon-glow': {
      '0%': { textShadow: '0 0 5px #fff, 0 0 10px #42a5f5, 0 0 20px #478ed1' },
      '100%': { textShadow: '0 0 10px #ec4899, 0 0 20px #a855f7, 0 0 30px #3b82f6' },
    },
  }}
>
  Chathupa Chamika
</Typography>


          {/* Centered Navigation Menu for Desktop */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
              gap: 2,
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                href={`#${page.toLowerCase()}`}
                sx={{
                  my: 2,
                  px: 3,
                  color: 'white',
                  position: 'relative',
                  fontSize: '1rem',
                   fontFamily: 'monospace',
                  textTransform: 'none',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    width: 0,
                    height: '3px',
                    background: 'linear-gradient(to right, #1d7021, #1d3070, #e0e0a4)',
                    transition: 'width 0.3s ease',
                  },
                  '&:hover::after': {
                    width: '100%',
                    transform: 'scale(1.1)',
                  },
                }}
              >
                {page}
              </Button>
            ))}

          </Box>

          {/* Navigation Menu for Mobile */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
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
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Social Media Links */}
          <Box sx={{ flexGrow: 0, display: 'flex', gap: 2 }}>
            {socialLinks.map((link) => (
              <IconButton
                key={link.name}
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: 'white', transition: 'color 0.3s', '&:hover': { color: '#42a5f5' } }}
              >
                {link.icon}
              </IconButton>
            ))}

            {/* Avatar/Profile */}
            <Tooltip title="Profile">
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="Chathupa Chamika" src={profileimg} />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
