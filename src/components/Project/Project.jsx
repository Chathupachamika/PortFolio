import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Chip from '@mui/material/Chip';
import Fade from '@mui/material/Fade';

import mos from '../../assets/images/burgers.jpg';
import clothify from '../../assets/images/clothify.jpg';
import country from '../../assets/images/country.jpg';
import userform from '../../assets/images/userform.jpg';
import defense from '../../assets/images/defense.jpg';
import todo from '../../assets/images/todo.jpg';
import weather from '../../assets/images/weather.jpg';
import wecare from '../../assets/images/wecare.png';
import zony from '../../assets/images/zony.jpeg';

const projects = [
  {
    title: 'ZONY Campus Smart LMS',
    description:
      'A comprehensive campus management web application with intuitive interfaces and robust Java Spring Boot backend for streamlined educational and administrative workflows.',
    image: zony,
    alt: 'ZONY Campus Smart LMS',
    link: 'https://github.com/Chathupachamika/ZONY-Campus',
    technologies: ['Angular', 'Java', 'Spring Boot', 'MySQL', 'Rest API', 'AI bot Gemini'],
  },
  {
    title: 'Clothify Store',
    description: 'E-commerce platform built with modern technologies for seamless shopping experience.',
    image: clothify,
    alt: 'Clothify Store',
    link: 'https://github.com/Chathupachamika/Clothify_Store-app',
    technologies: ['JavaFX', 'Java'],
  },
  {
    title: 'Weather Application',
    description: 'Real-time weather application that allows users to view current weather conditions and forecasts for their location.',
    image: weather,
    alt: 'Weather Application',
    link: 'https://chathupachamika.github.io/Weather_site/',
    technologies: ['HTML', 'CSS', 'JavaScript', 'API Handling'],
  },
  {
    title: 'Defense System',
    description:
      'A strategic simulation application featuring components like submarines, tanks, and helicopters to model defense systems.',
    image: defense,
    alt: 'Defense System',
    link: 'https://github.com/Chathupachamika/Defense_System',
    technologies: ['Java', 'Observer Pattern'],
  },
  {
    title: "Mahii's Tasks To Do",
    description: 'A JavaFX-based project showcasing GUI design and efficient task management.',
    image: todo,
    alt: "Mahii's Tasks To Do",
    link: 'https://github.com/Chathupachamika/Mahii-s_tasks_javaFx',
    technologies: ['JavaFX', 'Java'],
  },
  {
    title: 'User Form Application',
    description:
      'A MERN stack user form is a full-stack application built with MongoDB, Express, React, and Node.js, enabling seamless user input, data storage, and dynamic UI updates.',
    image: userform,
    alt: 'User form',
    link: 'https://github.com/Chathupachamika/User_Form-crud--MERN-Stack',
    technologies: ['React', 'Node JS', 'MongoDB','Express JS'],
  },
  {
    title: 'Country Information Site',
    description:
      'A web application displaying country-specific data such as population, language, and geography with a clean and responsive design.',
    image: country,
    alt: 'Country Information Site',
    link: 'https://github.com/Chathupachamika/Country_Information_Site',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'WeCare Prescription Management System',
    description:
      'An innovative solution designed to streamline prescription processes, improve accuracy, and enhance healthcare delivery with robust security and advanced features.',
    image: wecare,
    alt: 'WeCare Prescription Management System',
    link: 'https://github.com/iCET-110/Hospital-Management-Frontend',
    technologies: ['Spring Boot', 'Microservices', 'Maven', 'MySQL', 'Angular', 'TypeScript'],
  },
  {
    title: 'MOS Burgers',
    description:
      'A standalone application featuring an intuitive user interface for efficient restaurant management.',
    image: mos,
    alt: 'MOS Burgers',
    link: 'https://chathupachamika.github.io/MOS_Burgers_project/',
    technologies: ['HTML', 'CSS', 'JavaScript', 'RestAPI'],
  },
];

function Project() {
    return (
      <div id="project">
        { }
        <div
          className="text-7xl font-bold mb-32 flex flex-col items-center justify-center min-h-screen bg-black"
          style={{
            marginTop:'90px',
            color: '#db25cc',
            textAlign: 'center',
            textShadow: '0 0 15px #db25cc, 0 0 30px #db25cc, 0 0 45px #0088cc',
            fontFamily: 'Cinzel, serif',
            fontSize: '40px',
          }}
        >
          PROJECTS
        </div><br /><br />
  
        { }
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap: '64px',
            padding: '16px',
            flexWrap: 'wrap',
          }}
        >
          {projects.map((project, index) => (
            <Fade in={true} timeout={800} key={index}>
              <Card
                sx={{
                  maxWidth: 345,
                  borderRadius: '12px',
                  backdropFilter: 'blur(1px)',
                  backgroundColor: 'rgba(18, 18, 18, 0.5)',
                  boxShadow: '0 4px 20px rgba(255, 255, 255, 0.2)',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 8px 30px rgba(255, 255, 255, 0.3)',
                  },
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={project.image}
                    alt={project.alt}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{
                        fontFamily: 'Cinzel, serif',
                        fontSize: '24px',
                        color: '#fff',
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: 'Roboto, sans-serif',
                        fontSize: '16px',
                        color: '#fff',
                        opacity: 0.8,
                      }}
                    >
                      {project.description}
                    </Typography>
                    <div style={{ marginTop: '12px' }}>
                      {project.technologies.map((tech, idx) => (
                        <Chip
                          key={idx}
                          label={tech}
                          variant="outlined"
                          sx={{
                            color: '#fff',
                            borderColor: '#00aaff',
                            margin: '4px',
                            fontFamily: 'Roboto, sans-serif',
                            fontSize: '12px',
                          }}
                        />
                      ))}
                    </div>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    href={project.link}
                    target="_blank"
                    sx={{
                      color: '#00aaff',
                      border: '2px solid #00aaff',
                      borderRadius: '20px',
                      padding: '8px 16px',
                      fontFamily: 'Cinzel, serif',
                      fontSize: '14px',
                      textShadow: '0 0 8px #00aaff, 0 0 16px #0088cc',
                      transition: '0.4s ease-in-out',
                      '&:hover': {
                        backgroundColor: '#00aaff',
                        color: '#000',
                        boxShadow: '0 0 20px #00aaff, 0 0 40px #0088cc',
                      },
                    }}
                  >
                    View Project
                  </Button>
                </CardActions>
              </Card>
            </Fade>
          ))}
        </div>
      </div>
    );
  }
  
  export default Project;
