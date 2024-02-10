import { useState } from "react";

function Rechercher({ livres}) {
    const [Titre, setTitre] = useState("");
    const [resultSearch, setResultSearch] = useState([]);

    const recherche = () => {
        const str = Titre.toLowerCase();
        const result = livres.filter((res) => res.Titre.toLowerCase().includes(str));
        setResultSearch(result);
        console.log(result)
    };

    return (
        <div>
            <input type="text" value={Titre} onChange={(e) => setTitre(e.target.value, recherche())}/>
            {resultSearch.map((res) => (
                <ul>
                <li><img src={res.photo} alt="" width={150} height={150} /></li>
                <li>{res.Titre}</li>
                <li>{res.Auteur}</li>
                <li>{res.nbpages}</li>
            </ul>
            ))}
        </div>
    );
}

export default Rechercher;
