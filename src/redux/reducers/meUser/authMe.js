import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    tokenMe : undefined,
}

const authMeSlice = createSlice({
    name : "authMe",
    initialState,
    reducers :{
        setTokenMe : (state, action) => {
            state.TokenMe = { ...state, TokenMe : action.payload }
        }
    }
})

export const { setTokenMe } = authMeSlice.actions

export default authMeSlice.reducer