import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import ListeLivres from "./ListeLivres"
import DetailLive from "./DetailLivre"
import AjouterLivre from "./AjouterLivre"
import SupprimerLivre from "./Supprimer"

function RouterLivres() {
    

    return(
        <div>
            <BrowserRouter>
                 <ul>
                    <li>
                        <Link to="/ListeLivres" >Liste Livres</Link>
                    </li>
                    <li>
                        <Link to="/AjouterLivre" >Ajouter Livre</Link>
                    </li>
                    <li>
                        <Link to="/SupprimerLivre" >Supprimer Livre</Link>
                    </li>
                 </ul>
                 <Routes>
                    <Route path="/ListeLivres" element={<ListeLivres />} />
                    <Route path="/DetailLive/:Titre" element={<DetailLive />} />
                    <Route path="/AjouterLivre" element={<AjouterLivre />} />
                    <Route path="/SupprimerLivre" element={<SupprimerLivre />} />
                 </Routes>
            </BrowserRouter>
        </div>
    )
}
export default RouterLivres