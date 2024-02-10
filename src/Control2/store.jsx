import { configureStore } from "@reduxjs/toolkit";
import seliceLivres from "./SeliceLivres";

const store = configureStore({
    reducer : {
        livres: seliceLivres
    }
})
export default store;
