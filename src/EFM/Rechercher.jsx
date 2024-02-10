// Rechercher.js
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Rechercher() {
  const stagiaires = useSelector((state) => state.dbStagiaire);
  const [nom, setNom] = useState("");
  const [result, setResult] = useState([]);
  const dispatch = useDispatch();

  
  const rechercher = () => {
    dispatch({ type: "SEARCH", payload: nom });
  };

  return (
    <div>
      <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
      <button onClick={rechercher}>Rechercher</button>

      {result.map((res) => (
        <div key={res.nom}>
          <img src={res.image} alt="" width={150} height={150} />
          <p className="nom">{res.nom}</p>
          <p className="nom">{res.prenom}</p>
          <p className="nom">{res.filiere}</p>
        </div>
      ))}
    </div>
  );
}

export default Rechercher;
