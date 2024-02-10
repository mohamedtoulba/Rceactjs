import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

function DetailLive() {
    const {Titre} = useParams()
    const Livres = useSelector(state => state.livres.listLivres)
    const livre = Livres.find((res) => res.Titre === Titre);

    console.log(livre)
    return(
        <div>
            {livre && (
               <ul>
                    <li><img src={livre.photo} alt="" width={150} height={100} /></li>
                    <li>Titre: {livre.Titre}</li>
                    <li>Auteur: {livre.Auteur}</li>
                    <li>nbpages: {livre.nbpages}</li>
               </ul>
            )}
        </div>
    )
}
export default DetailLive