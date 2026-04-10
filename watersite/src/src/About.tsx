import { useState } from 'react'
import './App.css'
import Navbar from './Navbar';

function About() {
  return (
    <div className="about-page">
      <Navbar />
      <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>  
        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#334155' }}>
          We specialize in the ultimate conversion: turning waste into wonder. 
          Our technology takes the impossible and makes it essential, utilizing 
          a molecular refinement process that transforms piss into wine, then 
          distills that wine back into 100% pure, drinkable water. By stripping 
          away every impurity and restructuring the liquid at a cellular level, 
          we ensure that what was once discarded is now the cleanest hydration 
          available on Earth. No filters, no additives—just 100% water, 
          reclaimed through modern miracle science.
        </p>
      </div>
    </div>
  )
}

export default About