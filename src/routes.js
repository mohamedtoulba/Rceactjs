import React from "react";
import { Link, Route, Routes, BrowserRouter } from "react-router-dom";
import App from "./App";
import AjouterVoiture from "./AjouterVoiture";
import SupprimerVoiture from "./SupprimerVoiture";
import ModifierVoituer from "./ModifierVoiture";
import Recherche from "./recherche";

function Routess() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/App">Liste Voiture</Link>
            </li>
            <li>
                <Link to="/AjouterVoiture">AjouterVoiture</Link>
            </li>
            <li>
                <Link to="/SupprimerVoiture">SupprimerVoiture</Link>
            </li>
            <li>
                <Link to="ModifierVoituer">ModifierVoituer</Link>
            </li>
            <li>
                <Link to="Recherche">Recherche</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/App" element={<App />} />
          <Route path="/AjouterVoiture" element={<AjouterVoiture />} />
          <Route path="/SupprimerVoiture" element={<SupprimerVoiture />} />
          <Route path="/ModifierVoituer/:id" element={<ModifierVoituer />} />
          <Route path="/Recherche" element={<Recherche />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Routess;