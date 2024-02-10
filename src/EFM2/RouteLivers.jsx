import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";

import ListeLivres from "./ListeLivres";
import AjouterLivres from "./AjouterLivres";
import SupprimerLivers from "./SupprimerLivers";
import Rechercher from "./Rechercher";
import DetailLivers from "./DetailLivers";
const listLivres =[
    {Titre:"Robotique",nbpages:"196",Auteur:"SABBAI",photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh4MR_TfchjTugsPUlH_iRZk6DCIaIoSzdwQ&usqp=CAU"},
    { Titre:"Réseaux", nbpages:"59", Auteur:"Tanger", photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHN4OkTr02ack71tQ40Wj9oe2KKyRUw1CWyQ&usqp=CAU&reload=on"},
    { Titre:"Dév Informatique", nbpages:"88", Auteur:"MEKOUAR", photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTcmkjlBlOHBishDXPREj3DJbpfuVhnCBAng&usqp=CAU&reload=on"},
    { Titre:"Informatique", nbpages:"125", Auteur:"HASSOUNI",photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc3chh5f9ApwXY0MyVoXjcQFU2URDpdDkRDgJfTz_SsVG2kDRKAzUJb0sPXNYdJ9NyPTo&usqp=CAU"}];


function RouteLivres() {
    const [livres, setLivres] = useState(listLivres)

    return(
        <div>
            <ul>
                <li>
                    <Link to="/ListeLivres">Liste de livres</Link>
                </li>
                <li>
                    <Link to="/AjouterLivres">Ajouter un livres</Link>
                </li>
                <li>
                    <Link to="/SupprimerLivers">Supprimer livers</Link>
                </li>
                <li>
                    <Link to="/Rechercher">Rechercher livers</Link>
                </li>
            </ul>
            <Routes>
                
                <Route path="/ListeLivres" element={<ListeLivres livres={livres} setLivres={setLivres} />} />
                <Route path="/AjouterLivres" element={<AjouterLivres livres={livres} setLivres={setLivres} />} />
                <Route path="/SupprimerLivers" element={<SupprimerLivers livres={livres} setLivres={setLivres} />} />
                <Route path="/Rechercher" element={<Rechercher livres={livres} setLivres={setLivres} />} />
                <Route path="/DetailLivers/:Titre" element={<DetailLivers livres={livres} setLivres={setLivres} />} />
            </Routes>
        </div>
    )

}
export default RouteLivres;