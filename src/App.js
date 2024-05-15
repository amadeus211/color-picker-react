import React from "react";
import { NavLink } from "react-router-dom";
import PaletteUIColor from "./components/paletteIcons/paletteUIColor";
import Palette from "./pallete.json"; // Імпортуємо палетки

function App() {
  return (
    <div className="app-container">
      <div className="content">
        <div className="title">Flat UI Colors 2</div>
        <div className="palette-grid">
          {Palette.map((palette, index) => (
            <NavLink key={index} to={`/${palette.id}`}>
              <PaletteUIColor paletteName={palette.paletteName} />
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
