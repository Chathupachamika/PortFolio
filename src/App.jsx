import React from 'react'
import Header from './components/Header/Header';
import Background from './components/Background';

export default function App() {
  return (
    <>
      <div className="relative">
      <Background /> {/* Background of components with animation */}
      </div>
      <main className='flex flex-col items-center px-4 md:px-8 lg:px-16'>
        
        <Header />

        
    
      </main>
      

    </>
  )
}

