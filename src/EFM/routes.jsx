import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ListeStagiaire from "./ListeStagiaire";
import DetailStagiaire from "./detailStagiaire";
import AjouterStagiaire from "./AjouterStagiaire";
import Supprimer from "./Supprimer";
import Rechercher from "./Rechercher";

function RouteStagiaire() {
  return (
      <div>
        <Routes>
          <Route path="/ListeStagiaire" element={<ListeStagiaire />} />
          <Route path="/AjouterStagiaire" element={<AjouterStagiaire />} />
          <Route path="/DetailStagiaire/:nom" element={<DetailStagiaire />} />
          <Route path="/Supprimer" element={<Supprimer />} />
          <Route path="/Rechercher" element={<Rechercher />} />
        </Routes>
      </div>
  );
}

export default RouteStagiaire;
