import { combineReducers } from "redux";
import authLogin from "./auth/authLogin";
import authMovie from "./movie/authMovie";
// import authLoginSlice from "./auth/authLogin"
// kotak untuk menyimpan semua reducer yg ada
export default combineReducers ({
    auth : authLogin,
    movieBox : authMovie
})