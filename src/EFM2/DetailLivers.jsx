import { useParams } from "react-router-dom"

function DetailLivers({livres}) {
    const {Titre} = useParams();
    const detaitLiver = livres.find((res) => res.Titre === Titre);
    console.log(detaitLiver);



    return(
        <div>
            {detaitLiver && (
                <ul className="tp1">
                    <li className="tp2"><img src={detaitLiver.photo} alt="" width={150} height={150} /></li>
                    <li className="tp2">{detaitLiver.Titre}</li>
                    <li className="tp2">{detaitLiver.Auteur}</li>
                    <li className="tp2">{detaitLiver.nbpages}</li>
                    {/* <li className="tp2">
                        <button onClick={() => supprimer(res.nbpages)}>Supprimer</button>
                    </li> */}
                </ul>
            )}
        </div>
    )
}
export default DetailLivers