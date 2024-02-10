import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { modifier } from "./groupSlice";

function ModifierGroup() {
    const { id } = useParams();
    const listeGroups = useSelector(state => state.group.dbGroups);
    const [modifiedId, setModifiedId] = useState(null);
    const [nom, setNom] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        const selectedGroup = listeGroups.find(group => group.id === parseInt(id, 10));
        if (selectedGroup) {
            setNom(selectedGroup.nom);
            setModifiedId(selectedGroup.id);
        }
    }, [listeGroups]);

    const modifierAction = () => {
        dispatch(modifier({ id: modifiedId, nom }));
        setModifiedId(null);
        setNom("");
    };

    return (
        <div>
            <form>
                <label>ID : </label>
                <input type="number" value={modifiedId} onChange={(e) => setModifiedId(e.target.value)} disabled />

                <label>Group : </label>
                <input type="text" value={nom} onChange={(e) => setNom(e.target.value)}/>
                <button type="button" onClick={modifierAction}>Save</button>
            </form>
        </div>
    );
}

export default ModifierGroup;
