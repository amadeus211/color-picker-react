import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Palette from "../../pallete.json";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import sound from "../../sound.mp3"
import './stylesPalletPage.css';

export default function MaterialPage(props) {
    const { paletteName = "string" } = props;
    const selectedPalette = Palette.find((palette) => palette.paletteName === paletteName);
    const colors = selectedPalette.colors;

    const [copiedBlocks, setCopiedBlocks] = useState(new Set());
    const [hoveredBlock, setHoveredBlock] = useState(null);
    const [clickedBlock, setClickedBlock] = useState(null);
    const [modalColor, setModalColor] = useState(null);

    const handleCopy = (color) => {
        setCopiedBlocks(new Set([...copiedBlocks, color]));
        setModalColor(color);
        setTimeout(() => {
            setCopiedBlocks(new Set([...copiedBlocks].filter(block => block !== color)));
            setModalColor(null);
        }, 1500);
        playSound();
    };

    const playSound = () => {
        const audio = new Audio(sound);
        audio.play();
    };

    return (
        <div className="container">
            <header>
                <NavLink to="/">← Back</NavLink>
            </header>
            <div className="grid-container">
                {colors.map((color, index) => (
                    <CopyToClipboard key={index} text={color.color} onCopy={() => handleCopy(color)}>
                        <div className="copy-board"
                            style={{
                                backgroundColor: color.color,
                            }}
                            onMouseEnter={() => setHoveredBlock(color.color)}
                            onMouseLeave={() => setHoveredBlock(null)}
                            onClick={() => setClickedBlock(color.color)}
                        >
                            {hoveredBlock === color.color && !copiedBlocks.has(color.color) && (
                                <div className="copy-overlay">
                                    COPY
                                </div>
                            )}
                            {clickedBlock === color.color}
                            <div className={`text-details ${color.color === "#fff" ? "" : "dark"}`}>{color.name}</div>
                        </div>
                    </CopyToClipboard>
                ))}
            </div>
            <footer className="footer">{selectedPalette.paletteName}</footer>
            {modalColor && (
                <div className="modal" style={{ backgroundColor: modalColor.color, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 999 }}>
                    <div className="modal-content" style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        textAlign: 'center',
                        fontSize: "36px",
                        color: (modalColor.color === "#fff") ? '#c9c1c6' : '#fff'
                    }}>
                        <h2 style={{fontSize:'100px'}}>COPIED</h2>
                        <h2>{modalColor.name.toUpperCase()}</h2>
                        <p>{modalColor.color}</p>
                    </div>
                </div>
            )}
        </div>
    )
}
