import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { recherche } from "./groupSlice";

function RechercheGroup() {
    const [nom, setNom] = useState("");
    const dispatch = useDispatch();
    const searchResults = useSelector((state) => state.group.searchResults);

    const rechercheT = () => {
        dispatch(recherche(nom));
    };

    return (
        <div>
            <label>Rechercher par nom de groupe : </label>
            <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
            <button type="button" onClick={rechercheT}>
                Recherche
            </button>

            <div>
                <h2>Search Results:</h2>
                <ul>
                    {searchResults.map((group) => (
                        <li key={group.id}>{group.nom}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default RechercheGroup;
