import { useState } from "react"
import { useDispatch } from "react-redux";
import { add } from "./SeliceLivres";

function AjouterLivre() {

    const [photo, setPhoto] = useState(null);
    const [Titre, setTitre] = useState("");
    const [Auteur, setAuteur] = useState("");
    const [nbpages, setNbpages] = useState("");

    const dispatch = useDispatch();


    const Ajouter = () =>{

        dispatch(add({photo: photo, Titre: Titre, Auteur: Auteur, nbpages: nbpages}))

        setPhoto("");
        setTitre("");
        setAuteur("");
        setNbpages("")
    }

    return(
        <div>
            <form>
                <label>Photo : </label>
                <input type="text" value={photo} onChange={(e) => setPhoto(e.target.value)} /> <br />

                <label>Titre : </label>
                <input type="text" value={Titre} onChange={(e) => setTitre(e.target.value)} /> <br />

                <label>Auteur : </label>
                <input type="text" value={Auteur} onChange={(e) => setAuteur(e.target.value)} /> <br />

                <label>Nomber pages : </label>
                <input type="text" value={nbpages} onChange={(e) => setNbpages(e.target.value)} /> <br />

                <button type="button" onClick={Ajouter}>Ajouter</button>
            </form>
        </div>
    )
}

export default AjouterLivre;