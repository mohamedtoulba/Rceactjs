import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useNavigate } from "react-router-dom";

function App() {
  const voitures = useSelector((state) => state.db);
  const dispatch = useDispatch();
  const navigate = useNavigate();



  // const Add = () => {
  //   dispatch({ type: "ADD", payload: { marque: voitureMarque, model: voitureModel,type: voitureType} });
  //   setVoitureId("");
  //   setVoitureMarque("");
  //   setVoitureModel("");
  //   setVoiturType("");
   
  // };


  const Delete = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const Edit = (voiture) => {
    navigate(`/ModifierVoituer/${voiture.id}`);
  };


  // const Update = () => {
  //   dispatch({ type: "UPDATE", payload: { id: voitureId, marque: voitureMarque, model: voitureModel, type: voitureType } });
  //   setVoitureId("");
  //   setVoitureMarque("");
  //   setVoitureModel("");
  //   setVoiturType("");
  // };

 

  // const Search = () => {
  //   dispatch({ type: "SEARCH", payload: searchQuery });
  // };

  return (
    <div>
      {/* <label className="label-search">Search:</label>
      <input className="input-search" type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      <button className="btn-search" onClick={Search}>Search</button> */}

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
          {voitures.map((voiture) => (
            <tr key={voiture.id}>
              <td>{voiture.id}</td>
              <td>{voiture.marque}</td>
              <td>{voiture.model}</td>
              <td>{voiture.type}</td>
              <td>
                <button className="btn-Delete" onClick={() => Delete(voiture.id)}>DELETE</button>
                <button className="btn-Edit" onClick={() => Edit(voiture)}>EDIT</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <form>
        <label>ID:</label>
        <input type="number" value={voitureId} onChange={(e) => setVoitureId(e.target.value)} />
        <label>Marque:</label>
        <input type="text" value={voitureMarque} onChange={(e) => setVoitureMarque(e.target.value)} />
        <label>Model:</label>
        <input type="text" value={voitureModel} onChange={(e) => setVoitureModel(e.target.value)} />
        <input type="radio" name="tap"  value={"Esssence"} checked={voitureType === "Esssence"} onChange={(e) => setVoiturType(e.target.value)} />Esssence <br />
        <input type="radio" name="tap" value={"Gazoal"} checked={voitureType === "Gazoal"} onChange={(e) => setVoiturType(e.target.value)} />Gazoal <br />
        <button className="btn-Add" type="button" onClick={Add}>Add</button>
        <button className="btn-Update" type="button" onClick={Update}>Update</button>
      </form> */}
    </div>
  );
}
export default App;
