import { useState } from "react";
import { useDispatch } from "react-redux";


function Supprimer() {
    const [nom, setNom] = useState("")
    const dispatch = useDispatch()
    const supprimer = () =>{
        dispatch({type: "delete", payload: nom})
    }

    return(
        <div>
            <label>Supprimer par nom</label>
            <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
            <button onClick={supprimer} >Supprimer</button>
        </div>
    )

}
export default Supprimer;