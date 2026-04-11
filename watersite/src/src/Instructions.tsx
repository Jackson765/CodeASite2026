import './App.css'
import Navbar from './Navbar';
import { User } from "./User";

function RobotDrinkProtocol() {
  const containerStyle = {
    maxWidth: "900px", // Increased from 750px
    margin: "60px auto", // Increased margin for breathing room
    padding: "40px",
    fontFamily: "'Courier New', Courier, monospace",
    backgroundColor: "transparent",
    color: "inherit",
    lineHeight: "1.6",
    fontSize: "1.15rem" // Added a larger base font size
  };

  const headerStyle = {
    textTransform: "uppercase",
    borderBottom: "2px solid currentColor", // Slightly thicker border
    paddingBottom: "15px",
    letterSpacing: "2px",
    opacity: 0.85,
    fontSize: "2.2rem", // Explicitly larger header
    marginTop: "0"
  };

  const stepContainerStyle = {
    marginBottom: "35px", // Increased spacing between steps
    paddingLeft: "20px",
    borderLeft: "3px solid currentColor", // Thicker structural line
    opacity: 0.9
  };

  const stepTitleStyle = {
    fontWeight: "bold",
    display: "block",
    marginBottom: "8px",
    textTransform: "uppercase",
    fontSize: "1.25rem" // Increased from 0.95rem
  };

  const paramStyle = {
    fontSize: "1rem", // Increased from 0.85rem
    display: "block",
    marginTop: "10px",
    backgroundColor: "rgba(128, 128, 128, 0.1)",
    padding: "10px 15px", // Larger padding box
    borderRadius: "4px",
    fontStyle: "italic"
  };
  User.generate();

  return (
    <div><Navbar />
      <div style={containerStyle}>
        <header style={{ marginBottom: "40px" }}>
          <h1 style={headerStyle}>Task: H2O Ingestion Sequence</h1>
          <p style={{ fontSize: "1.05rem", opacity: 0.7, marginTop: "15px" }}>
            Execute the following biomechanical parameters in chronological order. 
            Discontinue execution if external fluid spillage exceeds 5ml.
          </p>
        </header>

        <div style={stepContainerStyle}>
          <span style={stepTitleStyle}>Step 1: Target Approach & Calibration</span>
          Locate cylindrical fluid vessel. Position chassis 0.5 meters from target. Extend dominant primary appendage (arm) on a direct linear path toward target coordinates.
        </div>

        <div style={stepContainerStyle}>
          <span style={stepTitleStyle}>Step 2: Grip Engagement</span>
          Expand phalanges to vessel diameter + 2cm. Intersect target. Contract phalanges evenly around the circumference.
          <span style={paramStyle}>&gt; PARAMETER: Apply 15–20 Newtons of lateral force to secure without crushing.</span>
        </div>

        <div style={stepContainerStyle}>
          <span style={stepTitleStyle}>Step 3: Vertical Extraction</span>
          Engage bicep to flex the elbow joint. Disconnect vessel from the surface.
          <span style={paramStyle}>&gt; PARAMETER: Elevate vertically at 0.2 m/s until base clears surface by 15cm. Maintain 0-degree horizontal tilt.</span>
        </div>

        <div style={stepContainerStyle}>
          <span style={stepTitleStyle}>Step 4: Pre-Ingestion Alignment</span>
          Retract arm toward the facial unit. Halt motion when vessel aperture is exactly 2cm anterior to the oral cavity.
          <span style={paramStyle}>&gt; PARAMETER: Part mandibles by 3cm. Incline cervical spine (neck) backward by 10 to 15 degrees.</span>
        </div>

        <div style={stepContainerStyle}>
          <span style={stepTitleStyle}>Step 5: Fluid Displacement</span>
          Rotate wrist joint upward to allow fluid to breach vessel aperture and enter the oral cavity.
          <span style={paramStyle}>&gt; PARAMETER: Wrist angle: 45° to 60°. Flow duration: 1.5 seconds. Target volume: 30–50ml.</span>
        </div>

        <div style={stepContainerStyle}>
          <span style={stepTitleStyle}>Step 6: Deglutition (Swallow) Execution</span>
          Halt wrist rotation immediately. Close mandibles. Engage pharyngeal muscles to force fluid downward into the esophagus.
          <span style={paramStyle}>&gt; PARAMETER: Suspend respiration for 1.2 seconds to prevent tracheal aspiration.</span>
        </div>

        <div style={stepContainerStyle}>
          <span style={stepTitleStyle}>Step 7: Reset & Terminate</span>
          Reverse wrist rotation back to 0 degrees. Extend arm to return vessel to initial surface coordinates. Release phalangeal grip.
          <span style={paramStyle}>&gt; STATUS: Sequence complete. System hydration levels stabilized.</span>
        </div>

        <div style={stepContainerStyle}>
          <div style={{color: "red"}}>
            WARNING: Do NOT breathe while drinking (causes asphyxiation)
          </div>
        </div>
      </div>
    </div>
  );
}

export default RobotDrinkProtocol;