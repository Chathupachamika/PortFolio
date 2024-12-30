import React from 'react';
import { FaDownload, FaLinkedin, FaBehance, FaDribbble, FaGithub } from 'react-icons/fa';
import profImage from '../../assets/images/chathupa_prof.png';
import { motion } from 'framer-motion';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const About = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container fixed>
                <Box
                    sx={{
                        bgcolor: 'transparent',
                        minHeight: '100vh',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                    }}
                >
                    {/* Hero Section */}
                    <section
                        id="home"
                        className="px-6 flex flex-col lg:flex-row items-center justify-center min-h-screen w-full py-16 lg:py-28 md:px-16"
                    >
                        {/* Profile Image */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="flex-shrink-0"
                        >
                            <img
                                src={profImage}
                                alt="Profile"
                                className="w-[250px] md:w-[300px] lg:w-[350px] rounded-full shadow-lg shadow-purple-700 transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                            />
                        </motion.div>

                        {/* About Text Section */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="mt-8 lg:mt-0 lg:ml-16 text-center lg:text-left"
                        >
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                                Induwara Vishwakantha
                            </h1>
                            <h3 className="mt-4 text-2xl md:text-3xl font-medium bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
                                Full Stack Developer
                            </h3>
                            <p className="mt-4 text-sm md:text-base text-gray-400">
                                I am a full-stack developer in the process of learning and refining my skills in both front-end and back-end technologies. With experience in JavaScript, React, Node.js, and more, I focus on building responsive, user-friendly web applications. My portfolio reflects my commitment to growth and my passion for creating efficient, scalable solutions.
                            </p>
                        </motion.div>
                    </section>
                </Box>
            </Container>
        </React.Fragment>
    );
};

export default About;
