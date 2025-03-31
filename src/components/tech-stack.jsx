"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "./ui/card"
import javaIcon from '../assets/Tech_Icon/java.png';
import jsIcon from '../assets/Tech_Icon/js.png';
import dartIcon from '../assets/Tech_Icon/dart.png';
import sqlIcon from '../assets/Tech_Icon/sql.png';
import typescriptIcon from '../assets/Tech_Icon/typescript.png';
import angularIcon from '../assets/Tech_Icon/angular.png';
import springBootIcon from '../assets/Tech_Icon/spring-boot.png';
import hibernateIcon from '../assets/Tech_Icon/hibernate.png';
import javaFXIcon from '../assets/Tech_Icon/javafx.png';
import flutterIcon from '../assets/Tech_Icon/flutter.png';
import mysqlIcon from '../assets/Tech_Icon/mysql.png';
import mongoDb from '../assets/Tech_Icon/mongodb.png';
import cssIcon from '../assets/Tech_Icon/css.png';
import figmaIcon from '../assets/Tech_Icon/figma.png';
import bootstrapIcon from '../assets/Tech_Icon/bootstrap.png';
import postgresql from '../assets/Tech_Icon/postgres.png';
import postmanIcon from '../assets/Tech_Icon/postman.png';

import { Badge } from "./ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"

export default function TechStack() {
  const categories = [
    {
      id: "languages",
      name: "Programming Languages",
      skills: [
        { name: "Java", icon: javaIcon },
        { name: "JavaScript", icon: jsIcon },
        { name: "Dart", icon: dartIcon },
        { name: "SQL", icon: sqlIcon },
        { name: "TypeScript", icon: typescriptIcon },
      ],
    },
    {
      id: "frameworks",
      name: "Frameworks & Tools",
      skills: [
        { name: "Angular", icon: angularIcon },
        { name: "Spring Boot", icon: springBootIcon },
        { name: "Hibernate", icon: hibernateIcon },
        { name: "JavaFX", icon: javaFXIcon },
        { name: "Flutter", icon: flutterIcon },
      ],
    },
    {
      id: "databases",
      name: "Database Management",
      skills: [
        { name: "MySQL", icon: mysqlIcon },
        { name: "PostgreSQL", icon: postgresql },
        { name: "MongoDB", icon: mongoDb },
      ],
    },
    {
      id: "ui",
      name: "UI/UX Tools",
      skills: [
        { name: "Figma", icon: figmaIcon },
        { name: "Bootstrap", icon: bootstrapIcon },
        { name: "CSS", icon: cssIcon },
      ],
    },
    {
      id: "testing",
      name: "APIs & Testing",
      skills: [{ name: "Postman", icon: postmanIcon }],
    },
  ]

  return (
    <section id="tech" className="py-20 bg-gradient-to-b from-background to-background/80">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-12"
        >
          <Badge variant="outline" className="mb-4 px-4 py-1 text-sm border-primary/20">
            My Skills
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Technology Stack</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-8" />
          <p className="text-muted-foreground max-w-2xl">
            I work with a variety of technologies to create robust and scalable applications. Here are the key
            technologies I specialize in:
          </p>
        </motion.div>

        <Tabs defaultValue="languages" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="text-xs md:text-sm">
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-4">
              <Card className="bg-card/50 backdrop-blur-sm border-primary/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6 text-center">{category.name}</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                    {category.skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                        className="flex flex-col items-center"
                      >
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-lg bg-background/50 border border-border p-3 flex items-center justify-center mb-3 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                          <img
                            src={skill.icon || "/placeholder.svg"}
                            alt={skill.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <span className="text-sm font-medium">{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

