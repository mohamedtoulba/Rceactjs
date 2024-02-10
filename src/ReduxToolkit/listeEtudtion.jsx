import { useState } from "react";
import { useSelector } from "react-redux"
// import { useParams } from "react-router-dom";

function EtudiantT() {
    // const {nom} = useParams();
    const listeEtu = useSelector(state => state.etudiant.dbEtudiants)
    const [etudiant, setEtudiant] =useState([])
    const [nom, setNom] = useState("")
    const recherche = (nom) =>{
        const rechercheEtudiant = listeEtu.filter(etu => etu.nomg === nom)
        setEtudiant(rechercheEtudiant)
        
    }
    return(
        <div>
            <form>
                <label>Recherche par nom</label>
                <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
                <button type="button" onClick={() => recherche(nom)} >Recherche</button> 
            </form>
            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Nom</td>
                        <td>Moyene</td>
                    </tr>
                </thead>
                <tbody>
                    {etudiant.map((res) => (
                        <tr>
                            <td>{res.id}</td>
                            <td>{res.Nom}</td>
                            <td>{res.moyG}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
    
}
export default EtudiantT