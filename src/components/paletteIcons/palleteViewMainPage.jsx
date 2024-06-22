import React from "react";
import Palette from "../../pallete.json";
import './stylesPalleteViewMainPage.css';
import { HelmetProvider, Helmet } from "react-helmet-async";
import PalleteIcon from "../../images/color-wheel.png"

export default function MaterialUIColor(props) {

  const { paletteName = "string" } = props;

  const selectedPalette = Palette.find((palette) => palette.paletteName === paletteName);
  const colors = selectedPalette.colors;

  return (
    <div className="material-ui-color-container">
      <Helmet>
        <title>Home Page</title>
        <link rel="icon" type="image/x-icon" href={PalleteIcon} />
      </Helmet>
      <div className="color-grid"> 
        {colors.map((color, index) => (
          <div key={index} className="color-box" style={{ backgroundColor: color.color }} /> 
        ))}
      </div>
      <div className="palette-info"> 
        <span className="palette-name">{selectedPalette.paletteName}</span>
        <span className="palette-emoji" role="img" aria-label="palette">{selectedPalette.emoji}</span>
      </div>
    </div>
  );
}