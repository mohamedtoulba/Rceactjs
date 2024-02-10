import { createSlice } from "@reduxjs/toolkit";
import { initialEtudiant } from "./dbGE";

const etudiantSlice = createSlice({
    name: "etudiant",
    initialState: initialEtudiant,
    reducers: {}
})

export default etudiantSlice.reducer;