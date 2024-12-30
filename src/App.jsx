import React from 'react'
import Header from './components/Header/Header';
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Education from './components/Education/Education';
import TechStack from './components/TechStack/TechStack'
import Background from './components/Background';

export default function App() {
  return (
    <>
      <div className="relative mt-16">
      <Background /> {/* Background of components with animation */}
      </div>
      <main className='flex flex-col items-center px-4 md:px-8 lg:px-16 mt-16'>
        
        <Header />
        <About />
        <Education />
       
        <TechStack />
        <Contact />
      </main>
 

    </>
  )
}

