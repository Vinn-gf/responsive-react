// import { useState } from "react";
import { reduxGetMoviePopular } from "../../services/get-data-movies-popular"
import { setMovies } from "../reducers/movie/authMovie";

export const GetMovieList = (page) => (dispatch) => {
    return reduxGetMoviePopular(page).then((result) => {
        dispatch(setMovies(result.data.data))
    }).catch((err) => {
        console.log(err)
    });
}