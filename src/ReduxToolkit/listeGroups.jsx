// listeGroups.jsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addGroup, removeGroup, modifier } from "./groupSlice";
import { useNavigate } from "react-router-dom";

function GroupEtu() {
    const listeGroups = useSelector(state => state.group.dbGroups);
    const [id, setId] = useState(listeGroups.length + 1);
    const [nom, setNom] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const supprimer = (idSupp) => {
        dispatch(removeGroup(idSupp));
    };

    const add = () => {
        dispatch(addGroup({ id: listeGroups.length + 1, nom }));
        setId(listeGroups.length + 2);
        setNom("");
    };

    const edit = (id) => {
        const selectedGroup = listeGroups.find(group => group.id === id);
        setId(selectedGroup.id);
        setNom(selectedGroup.nom);
    };

    const modifierAction = () => {
        dispatch(modifier({ id, nom }));
        setId(listeGroups.length + 1);
        setNom("");
    };

     const modifier = (id) =>{
        navigate(`/ModifierGroup/${id}`)

    }
    // const etudiant = (nom) =>{
    //     navigate(`/EtudiantT/${nom}`)

    // }
   

    return (
        <div>
            <form>
                <label>ID : </label>
                <input type="number" value={id} onChange={(e) => setId(e.target.value)} />

                <label>Group : </label>
                <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} />

                <button type="button" onClick={add}>Ajouter</button>
                <button type="button" onClick={modifierAction}>Modifier</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>Id group</th>
                        <th>Nom group</th>
                    </tr>
                </thead>
                <tbody>
                    {listeGroups.map((res) => (
                        <tr key={res.id}>
                            <td>{res.id}</td>
                            <td>{res.nom}</td>
                            <td>
                                <button onClick={() => supprimer(res.nom)}>Supprimer</button>
                                <button onClick={() => edit(res.id)}>edit</button>
                                <button onClick={() => modifier(res.id)}>Modifier</button>
                                {/* <button onClick={() => etudiant(res.nom)}>Liste Etudiant</button> */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default GroupEtu;
