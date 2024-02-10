// createStor.jsx
import { configureStore } from "@reduxjs/toolkit";
import groupSlice from "./groupSlice"; // Assurez-vous que le chemin d'importation est correct
import etudiantSlice from "./etudiantSlice";

const store = configureStore({
    reducer: {
        group: groupSlice,
        etudiant: etudiantSlice
        
    },
});

export default store;
