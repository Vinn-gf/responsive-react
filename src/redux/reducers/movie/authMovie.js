import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    movies : []
}

const authMovieSlice = createSlice({
    name : "movieAuth",
    initialState,
    reducers :{
        setMovies : (state, action) => {
            state.movies = { ...state, movies : action.payload}
        }
    }
})

export const { setMovies } = authMovieSlice.actions

export default authMovieSlice.reducer