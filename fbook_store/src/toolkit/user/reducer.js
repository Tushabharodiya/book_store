import { createSlice } from "@reduxjs/toolkit";
import { get_book, user_login, user_register } from "./api";


let initialState = {
    book: [],
    user: [],
    isLoading: false,
    isError: null,
}


let userSlice = createSlice({
    name: "book",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(get_book.pending, (state, action) => {
            console.log(action);
            state.isLoading = true;
        })
        builder.addCase(get_book.fulfilled, (state, action) => {
            console.log(action);
            state.isLoading = false;
            state.book = action.payload;
        })
        builder.addCase(get_book.rejected, (state, action) => {
            console.log(action);
            state.isError = true;
        })
        // builder.addCase(user_login.pending, (state, action) => {
        //     console.log(action);
        //     state.isLoading = true;
        // })
        // builder.addCase(user_login.fulfilled, (state, action) => {
        //     console.log(action);
        //     state.user.push(action.payload)
        // })
        // builder.addCase(user_login.rejected, (state, action) => {
        //     console.log(action);
        //     state.isError = true;
        // })
        builder.addCase(user_register.pending, (state, action) => {
            console.log(action);
            state.isLoading = true;
        })
        builder.addCase(user_register.fulfilled, (state, action) => {
            console.log(action);
            state.user.push(action.payload)
        })
        builder.addCase(user_register.rejected, (state, action) => {
            console.log(action);
            state.isError = true;
        })

    }

})

export default userSlice.reducer;