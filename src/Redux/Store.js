import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Slices/userSlice.js"
import moduleSlice from "./Slices/moduleSlice";

export default configureStore({
    reducer : {
        user : userSlice,
        module : moduleSlice
    }
})
