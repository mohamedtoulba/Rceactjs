import React from "react";
import { Link} from "react-router-dom";
import ListeStagiaire from "./ListeStagiaire";
import AjouterStagiaire from "./AjouterStagiaire";
import DetailStagiaire from "./detailStagiaire";
import styles from "./Header.modul.css"; // Import styles from the CSS module
import Supprimer from "./Supprimer";
import Rechercher from "./Rechercher";

function Header() {
  return (
      <div className={styles.navbar}>
        <ul>
          <li>
            <Link to="/ListeStagiaire">Liste Stagiaire</Link>
          </li>
          <li>
            <Link to="/AjouterStagiaire">Ajouter un stagiaire</Link>
          </li>
          <li>
            <Link to="/Supprimer">Supprimer un stagiaire</Link>
          </li>
          <li>
            <Link to="/Rechercher">Rechercher un stagiaire</Link>
          </li>
        </ul>
      </div>
  );
}

export default Header;
