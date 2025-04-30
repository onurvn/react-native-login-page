import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import AsyncStorage from "@react-native-async-storage/async-storage";

export const login = createAsyncThunk("user/login", async ({ email, password }) => {
    try {
        const auth = getAuth();
        const userCredential = await signInWithEmailAndPassword(auth, email, password);

        const user = userCredential.user;
        const token = user.stsTokenManager.accessToken;

        const userData = {
            token,
            user: user
        }

        await AsyncStorage.setItem("userToken", token)

        return userData

    } catch (error) {
        throw error
    }
})

export const autoLogin = createAsyncThunk("user/autoLogin", async () => {
    try {
        const token = await AsyncStorage.getItem("userToken");

        if (token) {
            return token;
        } else {
            throw new Error("Error");
        }

    } catch (error) {
        throw error;
    }
})

const initialState = {
    email: null,
    password: null,
    isLoading: false,
    isAuth: false,
    users: {
        userEmail: "test@test.com",
        userPassword: "123456"
    },
    token: null,
    user: null,
    error: null
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
        },
        setLogin: (state) => {
            if ((state.email === state.users.userEmail) &&
                (state.password === state.users.userPassword)) {
                console.log(true)
                state.isAuth = true
            } else {
                console.log("wrong")
                console.log(false)
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.isLoading = true;
                state.isAuth = false;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isAuth = true;
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.isAuth = false;
                state.error = action.error.message;
            })
            .addCase(autoLogin.pending, (state) => {
                state.isLoading = true;
                state.isAuth = false;
            })
            .addCase(autoLogin.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isAuth = true;
                state.token = action.payload;
            })
            .addCase(autoLogin.rejected, (state, action) => {
                state.isLoading = false;
                state.isAuth = false;
                state.token = null;
            })
    }
})


export const { setEmail, setPassword, setIsLoading } = userSlice.actions
export default userSlice.reducer;