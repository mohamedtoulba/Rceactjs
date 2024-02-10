import React, { useEffect, useState }  from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
function ModifierVoituer() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const voiture = useSelector((state) => state.db.find((v) => v.id === parseInt(id)));

  const [voitureId, setVoitureId] = useState("");
  const [voitureMarque, setVoitureMarque] = useState("");
  const [voitureModel, setVoitureModel] = useState("");
  const [voitureType, setVoiturType] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (voiture) {
      setVoitureId(voiture.id);
      setVoitureMarque(voiture.marque);
      setVoitureModel(voiture.model);
      setVoiturType(voiture.type);
    }
  }, [voiture]);
    const Update = () => {
        dispatch({ type: "UPDATE", payload: { id: voitureId, marque: voitureMarque, model: voitureModel, type: voitureType } });
        setVoitureId("");
        setVoitureMarque("");
        setVoitureModel("");
        setVoiturType("");
        navigate("/App");
    };

    return(
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
                <button className="btn-Update" type="button" onClick={Update}>Update</button>
            </form>
        </div>
    )
}
export default ModifierVoituer;


