import React from 'react';
import { motion } from 'framer-motion';
import javaIcon from '../../assets/Tech_Icon/java.png';
import nodejsIcon from '../../assets/Tech_Icon/nodejs.png';
import reactIcon from '../../assets/Tech_Icon/react.png';
import cssIcon from '../../assets/Tech_Icon/css.png';
import htmlIcon from '../../assets/Tech_Icon/html.png';
import jsIcon from '../../assets/Tech_Icon/js.png';
import mongodbIcon from '../../assets/Tech_Icon/mongodb.png';
import gitHubIcon from '../../assets/Tech_Icon/github.png';
import figmaIcon from '../../assets/Tech_Icon/figma.png';
import photoshopIcon from '../../assets/Tech_Icon/photoshop3.png';
import typescriptIcon from '../../assets/Tech_Icon/typescript.png';
import angularIcon from '../../assets/Tech_Icon/angular.png';
import springBootIcon from '../../assets/Tech_Icon/spring-boot.png';
import hibernateIcon from '../../assets/Tech_Icon/hibernate.png';
import javaFXIcon from '../../assets/Tech_Icon/javafx.png';
import flutterIcon from '../../assets/Tech_Icon/flutter.png';
import mysqlIcon from '../../assets/Tech_Icon/mysql.png';
import bootstrapIcon from '../../assets/Tech_Icon/bootstrap.png';
import postmanIcon from '../../assets/Tech_Icon/postman.png';
import dartIcon from '../../assets/Tech_Icon/dart.png';
import scenebuilderIcon from '../../assets/Tech_Icon/scenebuilder.png';
import sqlIcon from '../../assets/Tech_Icon/sql.png';


function TechStack() {
  const categorizedSkills = {
    Languages: [
      { name: 'Java', icon: javaIcon },
      { name: 'JavaScript', icon: jsIcon },
      { name: 'TypeScript', icon: typescriptIcon },
      { name: 'Dart', icon: dartIcon },
      { name: 'SQL', icon: sqlIcon },
    ],
    'Frameworks & Tools': [
      { name: 'Angular', icon: angularIcon },
      { name: 'Spring Boot', icon: springBootIcon },
      { name: 'Hibernate', icon: hibernateIcon },
      { name: 'JavaFX', icon: javaFXIcon },
      { name: 'Flutter', icon: flutterIcon },
      { name: 'React', icon: reactIcon },
      { name: 'Node.js', icon: nodejsIcon },
    ],
    'Database Management': [
      { name: 'MySQL', icon: mysqlIcon },
      { name: 'MongoDB', icon: mongodbIcon },
    ],
    'UI/UX Tools': [
      { name: 'Figma', icon: figmaIcon },
      { name: 'Bootstrap', icon: bootstrapIcon },
      { name: 'CSS', icon: cssIcon },
      { name: 'SceneBuilder', icon: scenebuilderIcon },
      { name: 'HTML', icon: htmlIcon },
      { name: 'Photoshop', icon: photoshopIcon },
    ],
    'APIs & Testing': [
      { name: 'RESTful APIs', icon: nodejsIcon },
      { name: 'Postman', icon: postmanIcon },
      { name: 'GitHub', icon: gitHubIcon },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      x: -20
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section className="py-16 w-full bg-gray-900" id="tech">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl text-white font-semibold text-center mb-16 md:text-5xl"
        >
          Technologies
        </motion.h1>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="flex flex-col space-y-16"
        >
          {Object.entries(categorizedSkills).map(([category, skills], index) => (
            <div key={index} className="flex flex-col space-y-6">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-2xl font-semibold text-khaki"
              >
                {category}
              </motion.h2>
              
              <div className="overflow-x-auto pb-4">
                <motion.div 
                  variants={containerVariants}
                  className="flex flex-nowrap space-x-6 min-w-max"
                >
                  {skills.map((skill, idx) => (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      whileHover={{ 
                        scale: 1.1,
                        transition: { 
                          type: "spring",
                          stiffness: 300
                        }
                      }}
                      className="flex flex-col items-center p-4 rounded-lg bg-gray-800/30 hover:bg-gray-700/40 transition-colors duration-300"
                    >
                      <div className="w-16 h-16 flex items-center justify-center bg-gray-800/50 rounded-lg p-3">
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-full h-full object-contain filter brightness-95 hover:brightness-110 transition-all duration-300"
                          style={{
                            maxWidth: '40px',
                            maxHeight: '40px'
                          }}
                        />
                      </div>
                      <p className="text-white text-sm font-medium text-center mt-3 whitespace-nowrap">
                        {skill.name}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default TechStack;