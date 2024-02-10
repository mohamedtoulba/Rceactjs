
import { useState } from "react";
import { addGroup } from "./ReduxToolkit/groupSlice";
import { useDispatch, useSelector } from "react-redux";

function AjouterGroup() {
    const listeGroups = useSelector(state => state.group.dbGroups);
    const [id, setId] = useState(listeGroups.length + 1);
    const [nom, setNom] = useState("");
    const dispatch = useDispatch();


    const add = () => {
        dispatch(addGroup({ id: listeGroups.length + 1, nom }));
        setId(listeGroups.length + 2);
        setNom("");
    };

    return(
        <div>
             <form>
                <label>ID : </label>
                <input type="number" value={id} onChange={(e) => setId(e.target.value)} />

                <label>Group : </label>
                <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} />

                <button type="button" onClick={add}>Ajouter</button>
            </form>
        </div>
    )
    
}
export default AjouterGroup