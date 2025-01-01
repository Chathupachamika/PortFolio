import * as React from 'react';
import { Grid, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import myImage from "../../assets/images/headshotchathupa.png";
import cvFile from "../../assets/documents/ChathupaCV.pdf";

// Neon Border Animation Keyframes
const neonBorderKeyframes = `
  @keyframes neon-border {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

// Append keyframes to the document head
const style = document.createElement("style");
style.type = "text/css";
style.innerHTML = neonBorderKeyframes;
document.head.appendChild(style);

const About = () => {
  return (
    <Grid
      container
      id="home"
      alignItems="center"
      sx={{
        marginTop: "-50px",
        minHeight: "100vh",
        textAlign: { xs: "center", md: "left" },
        background: "transparent",
        color: "white",
        padding: { xs: "2rem", md: "0" },
      }}
    >
      {/* Profile Image */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          marginBottom: { xs: "2rem", md: "0" },
        }}
      >
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={myImage}
            alt="Chathupa Profile"
            style={{
              width: "80%",
              maxWidth: "300px",
              height: "auto",
              borderRadius: "50%",
              boxShadow: "0 0 20px rgba(128, 0, 255, 0.8)",
              border: "5px solid rgba(128, 0, 255, 0.8)",
              marginTop: "10px", // Adjust this for mobile responsiveness
            }}
          />
        </motion.div>
      </Grid>

      {/* Details Section */}
      <Grid item xs={12} md={6}>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Typography
            component="h1"
            sx={{
              fontSize: { xs: "2rem", md: "3rem" },
              fontWeight: "bold",
              background: "linear-gradient(to right, #4facfe, #00f2fe)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Chathupa Chamika
          </Typography>
          <Typography
            component="h2"
            sx={{
              fontSize: { xs: "1.2rem", md: "1.8rem" },
              fontWeight: "bold",
              background: "linear-gradient(to right, #f953c6, #b91d73)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginTop: "0.5rem",
            }}
          >
            Full Stack Developer
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "0.9rem", md: "1rem" },
              color: "rgba(255, 255, 255, 0.8)",
              marginTop: "1.5rem",
            }}
          >
            An enthusiastic and dedicated university student with a strong
            foundation in frontend, backend, and full stack development. Skilled
            in software engineering and problem-solving, with a keen interest in
            leveraging IT expertise to develop innovative solutions. Seeking a
            free, volunteer-based software engineering internship to apply my
            technical skills and gain valuable industry experience while
            contributing to meaningful projects.
          </Typography>

          {/* Download CV Button */}
          <Box
            sx={{
              marginTop: "2rem",
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              style={{
                position: "relative",
                display: "inline-block",
              }}
            >
              <a
                href={cvFile}
                download
                style={{
                  textDecoration: "none",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    padding: "0.8rem 2rem",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    color: "white",
                    textAlign: "center",
                    backgroundColor: "#0a0a23",
                    borderRadius: "30px",
                    overflow: "hidden",
                    cursor: "pointer",
                    zIndex: 1,
                    transition: "background-color 0.3s",
                    "&:hover": {
                      backgroundColor: "#1a1a33",
                    },
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      inset: 0,
                      borderRadius: "30px",
                      padding: "2px",
                      background:
                        "linear-gradient(90deg, #ebdb34, #00f2fe, #4facfe, #ebdb34)",
                      mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMask:
                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      maskComposite: "exclude",
                      WebkitMaskComposite: "destination-out",
                      animation: "neon-border 2s linear infinite",
                      zIndex: -1,
                    },
                  }}
                >
                  <FaDownload style={{ marginRight: "8px" }} /> Download CV
                </Box>
              </a>
            </motion.div>
          </Box>
        </motion.div>
      </Grid>
    </Grid>
  );
};

export default About;
