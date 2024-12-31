import React from 'react';
import { AppBar, Box, Container, Typography } from '@mui/material';
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: '#000',
          boxShadow: 'none',
          paddingY: 2,
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              borderTop: '1px solid #444',
              paddingTop: 4,
              paddingBottom: 4,
              textAlign: 'center',
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: '#999',
                fontSize: '14px',
                marginBottom: { xs: 2, md: 0 },
              }}
            >
              &copy; {currentYear} All Rights Reserved.
            </Typography><br />
            <Box
              sx={{
                display: 'flex',
                gap: 4,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <a
                href="https://www.facebook.com/"
                style={{
                  transition: 'transform 0.3s ease',
                  color: 'white',
                  fontSize: '2.5rem',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#3b5998')}
                onMouseLeave={(e) => (e.target.style.color = 'white')}
              >
                <BsFacebook />
              </a>
              <a
                href="https://github.com/"
                style={{
                  transition: 'transform 0.3s ease',
                  color: 'white',
                  fontSize: '2.5rem',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#333')}
                onMouseLeave={(e) => (e.target.style.color = 'white')}
              >
                <BsGithub />
              </a>
              <a
                href="https://www.linkedin.com/"
                style={{
                  transition: 'transform 0.3s ease',
                  color: 'white',
                  fontSize: '2.5rem',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#0077b5')}
                onMouseLeave={(e) => (e.target.style.color = 'white')}
              >
                <BsLinkedin />
              </a>
            </Box>
          </Box>
        </Container>
      </AppBar>
    </>
  );
}

export default Footer;
