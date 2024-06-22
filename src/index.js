import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import PalettePage from "./components/palettePages/palletViewOpenPage";
import Palette from "./pallete.json";
import { HelmetProvider, Helmet } from "react-helmet-async";

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<App />} />
          {Palette.map((palette, index) => (
            <Route
              key={index}
              path={`/${palette.id}`}
              element={
                <>
                  <PalettePage paletteName={palette.paletteName} />
                </>
              }
            />
          ))}
        </Routes>
      </Router>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
