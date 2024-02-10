import { useState } from "react";
import { useDispatch } from "react-redux";
import { remove } from "./SeliceLivres";

function SupprimerLivre() {

    const [Titre, setTitre] = useState("");
    const disptch = useDispatch()

    const Supprimer = () =>{
        disptch(remove(Titre))
        setTitre("")
    }

    return(
       <div>
         <h2>Supprimer un livre</h2>
            <label>Titre</label>
            <input type="text" value={Titre} onChange={(e) => setTitre(e.target.value)} />
            <button onClick={Supprimer}>Supprimer</button>
       </div>
    )
}
export default SupprimerLivre;