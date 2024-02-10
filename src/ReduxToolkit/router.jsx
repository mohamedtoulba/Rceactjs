import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import GroupEtu from "./listeGroups";
import EtudiantT from "./listeEtudtion";
import AjouterGroup from "../ajouterGroup";
import SuppGroup from "./supprimerGroup";
import ModifierGroup from "./modifierGroup";
import RechercheGroup from "./recherchGroup";
function RoutreGroup() {



    return(
        <BrowserRouter>
        <div>
            <ul>
                <li>
                    <Link to="/GroupEtu" >liste groups</Link>
                </li>
                <li>
                    <Link to="/AjouterGroup">Ajouter group</Link>
                </li>
                <li>
                    <Link to="/SuppGroup" >Supprimer group</Link>
                </li>
                <li>
                    <Link to="/ModifierGroup" >Modifier group</Link>
                </li>
                <li>
                    <Link to="/RechercheGroup" >Recherche group</Link>
                </li>
                <li>
                    <Link to="/EtudiantT" >Liste etudiant</Link>
                </li>
            </ul>
           <Routes>
            <Route path="/GroupEtu" element={<GroupEtu />} />
            <Route path="/EtudiantT" element={<EtudiantT />} />
            <Route path="/AjouterGroup" element={<AjouterGroup />} />
            <Route path="/SuppGroup" element={<SuppGroup />} />
            <Route path="/ModifierGroup/:id" element={<ModifierGroup />} />
            <Route path="/RechercheGroup" element={<RechercheGroup />} />
           </Routes>
        </div>
        </BrowserRouter>
    )
}
export default RoutreGroup;