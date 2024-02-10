import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeGroup } from "./groupSlice";

function SuppGroup() {
    const dispatch = useDispatch();
    const [nom, setNom] = useState('');

    const supprimer = () => {
        dispatch(removeGroup(nom));
        setNom(''); // Clear the input field after removing the group
    };
    
    return (
        <div>
            <label>Supprimer par nom de groupe : </label>
            <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
            <button onClick={supprimer}>Supprimer</button>
        </div>
    );
}

export default SuppGroup;
