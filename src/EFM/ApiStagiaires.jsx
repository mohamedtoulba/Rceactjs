import axios from "axios";
import { useEffect, useState } from "react";

function ApiStagiaires() {
  const [stagiaires, setStagiaires] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3003/dbStagiaires")
      .then((res) => setStagiaires(res.data))
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Nom</th>
            <th>Prenom</th>
            <th>Filiere</th>
          </tr>
        </thead>
        <tbody>
          {stagiaires.map((res) => (
            <tr>
              <td><img src={res.image} alt="" width={150} height={150} /></td>
              <td>{res.nom}</td>
              <td>{res.prenom}</td>
              <td>{res.filiere}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ApiStagiaires;
