// groupSlice.js
import { createSlice } from "@reduxjs/toolkit";
import {initialGroup } from "./dbGE";




const groupSlice = createSlice({
    name: "group",
    initialState: initialGroup,
    reducers: {
        addGroup: (state, action) => {
            state.dbGroups.push(action.payload);
        },
        removeGroup: (state, action) => {
            state.dbGroups = state.dbGroups.filter((res) => res.nom !== action.payload);
        },
        modifier: (state, action) => {
            const groupIndex = state.dbGroups.findIndex((res) => res.id === action.payload.id);
            if (groupIndex !== -1) {
                state.dbGroups[groupIndex] = action.payload;
            }
        },
        recherche: (state, action) => {
            const searchTerm = action.payload.toLowerCase();
            state.searchResults = state.dbGroups.filter((group) =>
                group.nom.toLowerCase().includes(searchTerm)
            );
        },
    },
});
export default groupSlice.reducer;
export const { addGroup, removeGroup, modifier, recherche } = groupSlice.actions;


