import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Swal from 'sweetalert2';

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    
    formData.append("access_key", "3aa15a33-2b36-4eb9-9859-b55b7a6d76d2");
    
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());
      
      if (res.success) {
        console.log("Success", res);
        Swal.fire({
          title: "Success!",
          text: "Message Sent Successfully!",
          icon: "success"
        });
        event.target.reset();
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
      <Box sx={{ 
  minHeight: '40vh', 
  background: 'linear-gradient(to top, #000000, #4B0082, #000000, #000000)', 
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'center', 
  padding: '5rem 0',
  backgroundSize: '100% 100%, 100% 100%', 
  backgroundPosition: 'center center, left center', 
  backgroundRepeat: 'no-repeat', 
}}>

          <div className="w-full max-w-md mx-4">
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <Typography variant="h6" sx={{ color: 'white', mb: 1 }}>
                Get in touch
              </Typography>
              <Typography variant="h2" sx={{ color: 'white', fontWeight: 'bold' }}>
                Contact Me
              </Typography>
            </Box>

            <form onSubmit={onSubmit} className="space-y-6">
              <div>
                <TextField
                  label="Enter Name"
                  name="name"
                  required
                  fullWidth
                  variant="outlined"
                  sx={{
                    marginBottom: '16px',
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    '& .MuiInputBase-root': {
                      borderRadius: '8px',
                    },
                  }}
                />
              </div>

              <div>
                <TextField
                  label="Enter Email"
                  name="email"
                  required
                  fullWidth
                  variant="outlined"
                  sx={{
                    marginBottom: '16px',
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    '& .MuiInputBase-root': {
                      borderRadius: '8px',
                    },
                  }}
                />
              </div>

              <div>
                <TextField
                  label="Enter Message"
                  name="message"
                  required
                  multiline
                  rows={4}
                  fullWidth
                  variant="outlined"
                  sx={{
                    marginBottom: '16px',
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    '& .MuiInputBase-root': {
                      borderRadius: '8px',
                    },
                  }}
                />
              </div>

              <div className="flex justify-center pt-4">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{
                    padding: '10px 20px',
                    borderRadius: '8px',
                    background: 'linear-gradient(45deg, #6a1b9a, #8e24aa)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #8e24aa, #6a1b9a)',
                    },
                  }}
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Contact;