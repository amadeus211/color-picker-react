import { NavLink } from "react-router-dom";
import "./App.css";
import PaletteUIColor from "./components/paletteIcons/paletteUIColor";

function App() {
  return (

    <div className="app-container">
      <div className="content">
        <div className="title">
          Flat UI Colors 2
        </div>

        <div className="palette-grid">
          <NavLink to="/materialUIColor">
            <PaletteUIColor paletteName="Material UI Colors" />
          </NavLink>
          <NavLink to="/flatUIcolor">
            <PaletteUIColor paletteName="Flat UI Colors v1" />
          </NavLink>
          <NavLink to="/dutchUIcolor">
            <PaletteUIColor paletteName="Flat UI Colors Dutch" />
          </NavLink>
          <NavLink to="/americanUIcolor">
            <PaletteUIColor paletteName="Flat UI Colors American" />
          </NavLink>
          <NavLink to="/aussieUIcolor">
            <PaletteUIColor paletteName="Flat UI Colors Aussie" />
          </NavLink>
          <NavLink to="/britishUIcolor">
            <PaletteUIColor paletteName="Flat UI Colors British" />
          </NavLink>
          <NavLink to="/spanishUIcolor">
            <PaletteUIColor paletteName="Flat UI Colors Spanish" />
          </NavLink>
          <NavLink to="/indianUIcolor">
            <PaletteUIColor paletteName="Flat UI Colors Indian" />
          </NavLink>
          <NavLink to="/frenchUIcolor">
            <PaletteUIColor paletteName="Flat UI Colors French" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default App;
