import React from "react";
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { remove } from "./SeliceLivres";

function ListeLivres() {
    const Livres = useSelector(state => state.livres.listLivres)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const detail = (Titre) =>{
        navigate(`/DetailLive/${Titre}`)
    }

    const supprimer = (Titre) => {
        dispatch(remove(Titre))
    }
    
    return(
        <div>
            {Livres.map((res) => (
                <ul>
                    <li><img src={res.photo} alt="" width={150} height={100} /></li>
                    <li>Titre: {res.Titre}</li>
                    <li>Auteur: {res.Auteur}</li>
                    <li>nbpages: {res.nbpages}</li>
                    <li>
                        <button onClick={() => detail(res.Titre)}>Detail</button>
                        <button onClick={() => supprimer(res.Titre)}>Supprimer</button>
                    </li>
                </ul>
            ))}
        </div>
    )
}
export default ListeLivres;