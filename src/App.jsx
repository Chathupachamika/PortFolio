import Hero from "./components/hero.jsx"
import About from "./components/about.jsx"
import Education from "./components/education.jsx"
import TechStack from "./components/tech-stack.jsx"
import Projects from "./components/projects.jsx"
import Contact from "./components/contact.jsx"
import Footer from "./components/footer.jsx"
import Background from "./components/Background"
import Header from "./components/header.jsx"

function App() {
  return (
    <main className="min-h-screen">
      <Background />
      <Header />
      <Hero />
      <About />
      <Education />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}

export default App

