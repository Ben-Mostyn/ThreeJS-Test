import "./App.css";
import Sun from "./Components/ComponentCSS/Sun";
import Navbar from "./Components/Navbar";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import { useState } from "react";
import Moon from "./Components/ComponentCSS/Moon";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className="App">
      <header className="App-header">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        {darkMode ? (
          <div className="canvas-container">
            <Canvas className="canvas">
              <OrbitControls
                enableZoom={false}
                autoRotate={true}
                autoRotateSpeed={2.0}
              />
              <ambientLight intensity={0.5} />
              <Sun />
            </Canvas>
          </div>
        ) : (
          <div className="moon-container">
            <Canvas className="canvas">
              <OrbitControls
                enableZoom={false}
                autoRotate={true}
                autoRotateSpeed={2.0}
              />
              <ambientLight intensity={0.5} />
              <Moon />
            </Canvas>
          </div>
        )}
        ;
      </header>
    </div>
  );
}

export default App;
