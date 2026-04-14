import Hero from "./components/hero.jsx"
import About from "./components/about.jsx"
import Education from "./components/education.jsx"
import TechStack from "./components/tech-stack.jsx"
import Projects from "./components/projects.jsx"
import Contact from "./components/contact.jsx"
import Footer from "./components/footer.jsx"
import Background from "./components/Background"
import Header from "./components/header.jsx"

// If you completely deleted App.css, you don't need to import it here.
import "./App.css" 

function App() {
  return (
    // Added overflow-x-hidden to prevent mobile horizontal scrolling
    <main className="min-h-screen relative overflow-x-hidden flex flex-col">
      <Background />
      <Header />
      <div className="flex-grow">
        <Hero />
        <About />
        <Education />
        <TechStack />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </main>
  )
}

export default App