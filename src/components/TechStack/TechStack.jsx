import React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { motion } from 'framer-motion';
import javaIcon from '../../assets/Tech_Icon/java.png';
import jsIcon from '../../assets/Tech_Icon/js.png';
import dartIcon from '../../assets/Tech_Icon/dart.png';
import sqlIcon from '../../assets/Tech_Icon/sql.png';
import typescriptIcon from '../../assets/Tech_Icon/typescript.png';
import angularIcon from '../../assets/Tech_Icon/angular.png';
import springBootIcon from '../../assets/Tech_Icon/spring-boot.png';
import hibernateIcon from '../../assets/Tech_Icon/hibernate.png';
import javaFXIcon from '../../assets/Tech_Icon/javafx.png';
import flutterIcon from '../../assets/Tech_Icon/flutter.png';
import mysqlIcon from '../../assets/Tech_Icon/mysql.png';
import mongoDb from '../../assets/Tech_Icon/mongodb.png';
import cssIcon from '../../assets/Tech_Icon/css.png';
import figmaIcon from '../../assets/Tech_Icon/figma.png';
import bootstrapIcon from '../../assets/Tech_Icon/bootstrap.png';
import postgresql from '../../assets/Tech_Icon/postgres.png';
import postmanIcon from '../../assets/Tech_Icon/postman.png';

function TechStack() {
  const categories = [
    {
      title: 'Programming Languages',
      skills: [
        { img: javaIcon, title: 'Java' },
        { img: jsIcon, title: 'JavaScript' },
        { img: dartIcon, title: 'Dart' },
        { img: sqlIcon, title: 'SQL' },
        { img: typescriptIcon, title: 'TypeScript' },
      ],
    },
    {
      title: 'Frameworks & Tools',
      skills: [
        { img: angularIcon, title: 'Angular' },
        { img: springBootIcon, title: 'Spring Boot' },
        { img: hibernateIcon, title: 'Hibernate' },
        { img: javaFXIcon, title: 'JavaFX' },
        { img: flutterIcon, title: 'Flutter' },
      ],
    },
    {
      title: 'Database Management',
      skills: [
        { img: mysqlIcon, title: 'MySQL' },
        { img: postgresql, title: 'PostgreSQL' },
        { img: mongoDb, title: 'MongoDB' },
       
      ],
    },
    {
      title: 'UI/UX Tools',
      skills: [
        { img: figmaIcon, title: 'Figma' },
        { img: bootstrapIcon, title: 'Bootstrap' },
        { img: cssIcon, title: 'CSS' },
      ],
    },
    {
      title: 'APIs & Testing',
      skills: [{ img: postmanIcon, title: 'Postman' }],
    },
  ];

  return (
    <section className="text-white mb-36 flex flex-col items-center justify-center p-40" id="tech">
      <div className="max-w-7xl mx-auto px-4">
        { }
        <div
  className="text-7xl font-bold mb-32 flex flex-col items-center justify-center min-h-screen bg-black"
  style={{
    marginTop:'90px',
    color: '#00aaff',
    textAlign: 'center',
    textShadow: '0 0 15px #00aaff, 0 0 30px #00aaff, 0 0 45px #0088cc',
    fontFamily: 'Cinzel, serif',
    fontSize:'40px',
  }}
>
  TECHNOLOGIES
</div>
<br /><br />

        {categories.map((category, index) => (
          <div key={index} className="mb-12">
            { }
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-3xl text-white font-medium text-center mb-8"
              style={{ fontFamily: 'Poppins, sans-serif' , color: 'white',marginLeft:'20px'}}
            >
              {category.title}
            </motion.h2>
            <Box
              sx={{
                width: '100%',
                height: 'auto',
                backgroundColor: 'rgba(18, 18, 18, 0.5)', 
                overflowY: 'auto',
                marginTop: '40px',
                marginBottom: '100px',
                overflowX: 'hidden',
  scrollbarWidth: 'none', 
                '&::-webkit-scrollbar': {
                  display: 'none', 
                },
              }}
              
            >
              <ImageList variant="masonry" cols={4} gap={16}>
                {category.skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{
                      scale: 1.1,
                      transition: {
                        type: 'spring',
                        stiffness: 300,
                      },
                    }}
                    className="bg-gray-800/30 p-4 rounded-lg hover:bg-gray-700/40 transition-colors duration-300"
                  >
                    <ImageListItem>
                      <img
                        src={skill.img}
                        alt={skill.title}
                        loading="lazy"
                        className="filter brightness-95 hover:brightness-110 transition-all duration-300"
                        style={{ maxWidth: '100px', maxHeight: '100px', margin: 'auto' }}
                      />
                      <p
                        className="text-white text-center text-sm font-medium mt-3"
                        style={{ fontFamily: 'Poppins, sans-serif' , color: 'white', marginLeft: '30px' }}
                      >
                        {skill.title}
                      </p>
                    </ImageListItem>
                  </motion.div>
                ))}
              </ImageList>
            </Box>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;
