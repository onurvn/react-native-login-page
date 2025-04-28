import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: null,
    password: null,
    isLoading: false,
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setEmail: (state, action) => {
            const loverCaseEmail = action.payload.toLowerCase();
            state.email = loverCaseEmail
        },
        setPassword: (state, action) => {
            state.password = action.payload
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload
        }
    }
})


export const { setEmail, setPassword, setIsLoading } = userSlice.actions
export default userSlice.reducer;