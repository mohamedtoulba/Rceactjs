import { useState } from "react";

function SupprimerLivers({livres, setLivres}) {
    const [Titre, setTitre] = useState("")

    const supprimer = () => {
        const result = livres.filter((res) => res.Titre !== Titre)
        setLivres(result);
    }
    return(
        <div>
            <form>
                <label>Supprimer par titer</label>
                <input type="text" value={Titre} onChange={(e) => setTitre(e.target.value)} />
                <button type="button" onClick={supprimer}>Supprimer</button>
            </form>
        </div>
    )
}
export default SupprimerLivers;