import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Recherche() {
  const dispatch = useDispatch();
  const voitures = useSelector((state) => state.db);

  const [marque, setMarque] = useState("");
  const [voituresResult, setVoituresResult] = useState([]);

  useEffect(() => {
    // Update voituresResult whenever voitures changes
    setVoituresResult(voitures);
  }, [voitures]);

  const recherche = () => {
    // Dispatch the search action with the entered marque
    dispatch({ type: "SEARCH", payload: marque });
  };

  return (
    <div>
      <label className="label-search">Search:</label>
      <input
        className="input-search"
        type="text"
        value={marque}
        onChange={(e) => setMarque(e.target.value)}
      />
      <button className="btn-search" onClick={recherche}>
        Search
      </button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Marque</th>
            <th>Model</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {voituresResult.map((voiture) => (
            <tr key={voiture.id}>
              <td>{voiture.id}</td>
              <td>{voiture.marque}</td>
              <td>{voiture.model}</td>
              <td>{voiture.type}</td>
              <td>
                {/* You can add your DELETE and EDIT buttons here */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Recherche;
