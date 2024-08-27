import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/reducer"



let store = configureStore({
    reducer: {
        userSlice: userSlice,
    }
})

export default store;