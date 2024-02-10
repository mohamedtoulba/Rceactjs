import React from "react";
import "./Stagiaire.module.css"
import { useSelector } from "react-redux";

function Stagiaire({ nom, image }) {

  return (
    <div className="container">
       <img src={image} alt="" width={150} height={150} />
        <p className="nom">{nom}</p>
    </div>
  );
}

export default Stagiaire;
