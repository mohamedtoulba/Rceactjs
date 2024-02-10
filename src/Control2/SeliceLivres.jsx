import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    listLivres : [
        {Titre: "Robotique", nbpages: "150", Auteur: "SABBAI", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh4MR_TfchjTugsPUlH_iRZk6DCIaIoSzdwQ&usqp=CAU"},
        {Titre: "Réseaux", nbpages: "170", Auteur: "Tanger", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHN4OkTr02ack71tQ40Wj9oe2KKyRUw1CWyQ&usqp=CAU&reload=on"},
        {Titre: "Dév Informatique", nbpages: "100", Auteur: "MaKKORI", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTcmkjlBlOHBishDXPREj3DJbpfuVhnCBAng&usqp=CAU&reload=on"},
        
    ]
}

const sliceLivres = createSlice({
    name: "livres",
    initialState,
    reducers: {
        add: (state, action) => {
           state.listLivres = [...state.listLivres, action.payload]
        },

        remove: (state, action) => {
            state.listLivres = state.listLivres.filter((res) => res.Titre !== action.payload)
        },
    }
})

export default sliceLivres.reducer;
export const {add, remove } = sliceLivres.actions;