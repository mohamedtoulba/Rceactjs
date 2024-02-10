import React from "react";
import "./liver.css";
import { useNavigate } from "react-router-dom";
function ListeLivres({livres, setLivres}) {
    const navigate = useNavigate()
   

    const supprimer = (nbpages) => {
        const resultSupprimer = livres.filter((res) => res.nbpages !== nbpages)
        setLivres(resultSupprimer)
        
    }
    const detait = (Titre) =>{
        navigate(`/DetailLivers/${Titre}`)
    }

    return(
        <div>
           {livres.map((res) => (
             <ul className="tp1">
                <li className="tp2"><img onClick={() => detait(res.Titre)} src={res.photo} alt="" width={150} height={150} /></li>
                <li className="tp2">{res.Titre}</li>
                {/* <li className="tp2">{res.Auteur}</li>
                <li className="tp2">{res.nbpages}</li> */}
                <li className="tp2">
                    <button onClick={() => supprimer(res.nbpages)}>Supprimer</button>
                </li>
            </ul>
           ))}
        </div>
    )
}
export default ListeLivres;