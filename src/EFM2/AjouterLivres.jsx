import { useState } from "react";

function AjouterLivres({livres, setLivres}) {

    const [photo, setPhoto] = useState("")
    const [Titre, setTitre] = useState("")
    const [nbpages, setNbpages] = useState("")
    const [Auteur, setAuteur] = useState("")

    const ajouter = () =>{
        const newLiver = {
            photo,
            Titre,
            nbpages,
            Auteur
        }
        const T = [...livres, newLiver]
        setLivres(T);

        setPhoto("")
        setTitre("");
        setNbpages("")
        setAuteur("")
    }
    
    return(
        <div>
            <form>
                <input type="text" value={photo} onChange={(e) => setPhoto(e.target.value)} />
                <input type="text" value={Titre} onChange={(e) => setTitre(e.target.value)} />
                <input type="number" value={nbpages} onChange={(e) => setNbpages(e.target.value)} />
                <input type="text" value={Auteur} onChange={(e) => setAuteur(e.target.value)} />
                <button type="button" onClick={ajouter}>Ajouter</button>
            </form>
        </div>
    )
}
export default AjouterLivres;