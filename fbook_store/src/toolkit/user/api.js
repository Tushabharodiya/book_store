import { createAsyncThunk } from "@reduxjs/toolkit";
import { addData, getData } from "../api/api";
import { GET_BOOK, USER_REGISTER, USERLOGIN } from "../constnt";



let get_book = createAsyncThunk(GET_BOOK, async () => {
    let res = await getData(GET_BOOK)
    return res.data.book;
})

// let user_login = createAsyncThunk(USERLOGIN, async (action) => {
//     let res = await addData(USERLOGIN, action)
//     return res.data;
// })

let user_register = createAsyncThunk(USER_REGISTER, async (action) => {
    let res = await addData(USER_REGISTER, action)
    return res.data.user;
})



export { get_book,user_register }