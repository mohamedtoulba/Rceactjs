import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function DetailStagiaire() {
  const {nom} = useParams();
  const stagiaires = useSelector((state) => state.dbStagiaire);
  const stagiaire = stagiaires.find((res) => res.nom === nom);

  console.log(stagiaire)


  return(
    <div>
      {stagiaire && (
        < div className="container">
          <img src={stagiaire.image} alt="" width={150} height={150} />
          <p className="nom" >{stagiaire.nom}</p>
          <p className="nom" >{stagiaire.prenom}</p>
          <p className="nom" >{stagiaire.filiere}</p>
        </div>
      )}
    </div>
  )
}
export default DetailStagiaire;