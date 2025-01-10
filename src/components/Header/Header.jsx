import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import myImage from "../../assets/images/headshotchathupa.png";
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Slider from 'react-slick';
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs';
import profileimg from '../../assets/images/profile.png';

const pages = ['Home', 'Tech', 'Project', 'Contact'];
const socialLinks = [
  { name: 'LinkedIn', icon: <BsLinkedin />, link: 'https://www.linkedin.com/in/chathupa-chamika-/' },
  { name: 'GitHub', icon: <BsGithub />, link: 'https://github.com/ChathupaChamika' },
  { name: 'Facebook', icon: <BsFacebook />, link: 'https://web.facebook.com/chathupa.chamika.7' },
];

function ResponsiveAppBar() {
  const [openDialog, setOpenDialog] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleAvatarClick = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleSlideChange = (index) => {
    setCurrentIndex(index);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const images = [profileimg, myImage, 'https://via.placeholder.com/200']; 

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => handleSlideChange(next),
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: '#000', boxShadow: 'none', zIndex: 1201 }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            { }
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
              }}
            >
              Chathupa Chamika
            </Typography>

            { }
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

            { }
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

              { }
              <Tooltip title="Profile">
                <IconButton sx={{ p: 0 }} onClick={handleAvatarClick}>
                  <Avatar alt="Chathupa Chamika" src={profileimg} />
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      { }
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Image Gallery</DialogTitle>
        <DialogContent>
          <Slider {...settings}>
            {images.map((image, index) => (
              <Box key={index} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={image} alt={`gallery-img-${index}`} style={{ width: '100%', maxWidth: '500px' }} />
              </Box>
            ))}
          </Slider>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ResponsiveAppBar;
