import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Palette from "../../pallete.json";
import { CopyToClipboard } from "react-copy-to-clipboard";
import sound from "../../sound.mp3";
import "./stylesPalletViewOpenPage.css";
import { HelmetProvider, Helmet } from "react-helmet-async";
import PalleteIcon from "../../images/color-wheel.png"

export default function MaterialPage(props) {
  const { paletteName = "string" } = props;
  const selectedPalette = Palette.find(
    (palette) => palette.paletteName === paletteName
  );
  const colors = selectedPalette.colors;

  const [hoveredBlock, setHoveredBlock] = useState(null);
  const [clickedBlock, setClickedBlock] = useState(null);
  const [modalColor, setModalColor] = useState(null);

  const handleCopy = (color) => {
    setModalColor(color);
    setTimeout(() => {
      setModalColor(null);
      setHoveredBlock(null);
    }, 1500);
    playSound();
  };

  const playSound = () => {
    const audio = new Audio(sound);
    audio.play();
  };

  return (
    <div className="container">
      <Helmet>
        <title>{paletteName}</title>
        <link rel="icon" type="image/x-icon" href={PalleteIcon} />
      </Helmet>
      <header>
        <NavLink to="/">← Back</NavLink>
      </header>
      <div className="grid-container">
        {colors.map((color, index) => (
          <CopyToClipboard
            key={index}
            text={color.color}
            onCopy={() => handleCopy(color)}
          >
            <div
              className="copy-board"
              style={{
                backgroundColor: color.color,
              }}
              onMouseEnter={() => setHoveredBlock(color.color)}
              onMouseLeave={() => setHoveredBlock(null)}
              onClick={() => setClickedBlock(color.color)}
            >
              {hoveredBlock === color.color && (
                <div className="copy-overlay">COPY</div>
              )}
              {clickedBlock === color.color}
              <div
                className={`text-details ${
                  color.color === "#fff" ? "" : "dark"
                }`}
              >
                {color.name}
              </div>
            </div>
          </CopyToClipboard>
        ))}
      </div>
      <footer className="footer">{selectedPalette.paletteName}</footer>
      {modalColor && (
        <div
          className="modal"
          style={{
            backgroundColor: modalColor.color,
          }}
        >
          <div
            className="modal-content"
            style={{
              color: modalColor.color === "#fff" ? "#c9c1c6" : "#fff",
            }}
          >
            <h2 style={{ fontSize: "100px" }}>COPIED</h2>
            <h2>{modalColor.name.toUpperCase()}</h2>
            <p>{modalColor.color}</p>
          </div>
        </div>
      )}
    </div>
  );
}
