import React from "react";
import "./listeStagiaire.css";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate } from "react-router-dom";


function ListeStagiaire() {
  const stagiaires = useSelector((state) => state.dbStagiaire);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const suppimer = (nom) =>{
    dispatch({type:"delete", payload: nom})
  }
  
  console.log(dispatch)
  const detail = (nom) =>{
     navigate(`/DetailStagiaire/${nom}`)
  }

  return (
    <div>
      {stagiaires.map((res) => (
        <div className="container" >
        
          <img onClick={() => detail(res.nom)} src={res.image} width={150} height={150} alt="" />
          <p className="nom">{res.nom}</p>

          <button onClick={() => suppimer(res.nom)}>Supprimer</button>
        </div>
      ))}
    </div>
  );
}

export default ListeStagiaire;
