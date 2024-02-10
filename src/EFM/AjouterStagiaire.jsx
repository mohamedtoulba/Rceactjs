import React, { useState } from "react"; // Removed 'useTransition'
import { useDispatch } from "react-redux";

function AjouterStagiaire() {
  const [image, setImage] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [filiere, setFiliere] = useState("");
  const dispatch = useDispatch();

  const add = () => {
    dispatch({ type: "add", payload: { image: image, nom: nom, prenom: prenom, filiere: filiere } });
    setImage("");
    setNom("");
    setPrenom("");
    setFiliere("");
  };

  return (
    <div>
      <input type="text" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Saisir le lien de l'image" /><br />
      <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} placeholder="Saisir le nom" /> <br />
      <input type="text" value={prenom} onChange={(e) => setPrenom(e.target.value)} placeholder="Saisir le prenom" /><br />
      <input type="text" value={filiere} onChange={(e) => setFiliere(e.target.value)} placeholder="Saisir la filiere" /> <br />
      <button onClick={add}>Ajouter</button>
    </div>
  );
}

export default AjouterStagiaire;
