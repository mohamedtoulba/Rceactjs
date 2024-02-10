import React, { useState }  from "react";
import { useDispatch } from "react-redux";
import {useNavigate } from "react-router-dom";
function AjouterVoiture() {
    const dispatch = useDispatch();
    const [voitureId, setVoitureId] = useState("");
    const [voitureMarque, setVoitureMarque] = useState("");
    const [voitureModel, setVoitureModel] = useState("");
    const [voitureType, setVoiturType] = useState("");
    const navigate = useNavigate();

    const Add = () => {
    dispatch({ type: "ADD", payload: { marque: voitureMarque, model: voitureModel,type: voitureType} });
    setVoitureId("");
    setVoitureMarque("");
    setVoitureModel("");
    setVoiturType("");
    navigate("/App");
   
  };

    return (
        <div>
             <form>
                <label>ID:</label>
                <input type="number" value={voitureId} onChange={(e) => setVoitureId(e.target.value)} />
                <label>Marque:</label>
                <input type="text" value={voitureMarque} onChange={(e) => setVoitureMarque(e.target.value)} />
                <label>Model:</label>
                <input type="text" value={voitureModel} onChange={(e) => setVoitureModel(e.target.value)} />
                <input type="radio" name="tap"  value={"Esssence"} checked={voitureType === "Esssence"} onChange={(e) => setVoiturType(e.target.value)} />Esssence <br />
                <input type="radio" name="tap" value={"Gazoal"} checked={voitureType === "Gazoal"} onChange={(e) => setVoiturType(e.target.value)} />Gazoal <br />
                <button className="btn-Add" type="button" onClick={Add}>Add</button>
            </form>
        </div>
    )
  


}
export default AjouterVoiture;