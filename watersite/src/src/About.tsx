import React from 'react';
import './App.css'; 
import Navbar from './Navbar';

function About() {
  return (
    <div className="page-wrapper">
      <Navbar />
      
      <div className="content-wrapper">
        <h1 className="page-title">The Pure Alchemy Initiative</h1>

        <section>
          <h2 className="section-title">Our Goal</h2>
          <p className="goal-text">
            At Pure Alchemy, our mission is to achieve true resource independence. We believe 
            that "waste" is simply a failure of imagination. Our goal is to provide a 
            closed-loop hydration system that ensures 100% water purity, regardless of the 
            input source. By merging advanced chemical engineering with molecular gastronomy, 
            we are creating a world where premium hydration is accessible anywhere.
          </p>
        </section>

        <section className="process-card">
          <h2 className="process-card-title">The Reclamation Process</h2>
          
          <div className="step-row">
            <div className="step-label">Step 1:</div>
            <p className="step-desc">
              <strong>Fermentation Stabilization:</strong> Raw organic waste is introduced to a 
              proprietary bio-catalyst. This converts high-nitrogen urea into a stabilized 
              "Bio-Wine" state. The alcohol content acts as a natural solvent, breaking down complex toxins that 
              standard filters simply miss.
            </p>
          </div>

          <div className="step-row">
            <div className="step-label">Step 2:</div>
            <p className="step-desc">
              <strong>Molecular Vapor Distillation:</strong> The wine is flash-heated in a vacuum 
              chamber. At precisely 78.3°C, the ethanol is separated, while the 
              remaining liquid is shattered into a fine molecular mist. 100% of 
              the original impurities drop out of suspension via gravity.
            </p>
          </div>

          <div className="step-row">
            <div className="step-label">Step 3:</div>
            <p className="step-desc">
              <strong>Re-Hydrogenation:</strong> The pure vapor is passed through a cold-plasma 
              field that re-aligns the hydrogen bonds. This creates "Ascended Water"—a liquid that 
              is 100% H2O, completely free of the mineral "memory" of its origin. 
            </p>
          </div>
        </section>

        <div className="cta-container">
          <p className="cta-quote">
            "We don't just filter the past; we engineer the future."
          </p>
          <a href="/shop" className="cta-button">
            Experience the Miracle
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;