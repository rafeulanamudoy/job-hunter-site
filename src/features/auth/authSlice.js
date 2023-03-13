import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config"

const initialState = {

    user: {
        role: "",
        email: "",
    },
    isLoading: true,
    isError: false,
    error: ""
}

export const createUser = createAsyncThunk("auth/createUser", async ({ email, password }, thunkAPI) => {


    const result = await createUserWithEmailAndPassword(auth, email, password);
    return result.user.email

})

export const loginUser = createAsyncThunk("auth/loginUser", async ({ email, password }, thunkAPI) => {
    const result = await signInWithEmailAndPassword(auth, email, password)
    console.log(result)
    return result.user.email
})

export const getUser = createAsyncThunk("auth/getUser", async (email) => {


    const res = await fetch(`${process.env.REACT_APP_DEV_URL}/user/${email}`)

    const data = await res.json()
    if (data.status) {

        return data
    }
    else {
        return email
    }

})


const counterSlice = createSlice({

    name: "auth",
    initialState,
    reducers: {
        logOut: (state) => {
            state.user = { email: "", role: "" }
        },

        setUser: (state, { payload }) => {

            state.user.email = payload;
            state.isLoading = false
        }
        ,
        toggoleLoading: (state) => {
            state.isLoading = false


        }

    },
    extraReducers: (builder) => {
        builder.addCase(createUser.pending, (state) => {

            state.isLoading = true;
            state.isError = false;
            state.error = ""

        }).addCase(createUser.fulfilled, (state, { payload }) => {


            state.user.email = payload;
            state.isLoading = false;
            state.isError = false;
            state.error = ""



        }).addCase(createUser.rejected, (state, action) => {

            state.isLoading = false;
            state.isError = true;
            state.error = action.error.message

        }).addCase(loginUser.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
            state.error = ""

        }).addCase(loginUser.fulfilled, (state, { payload }) => {


            state.user.email = payload;
            state.isLoading = false;
            state.isError = false;
            state.error = ""



        }).addCase(loginUser.rejected, (state, action) => {


            state.isLoading = false;
            state.isError = true;
            state.error = action.error.message



        }).addCase(getUser.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
            state.error = ""

        }).addCase(getUser.fulfilled, (state, { payload }) => {

            if (payload.status) {
                state.user = payload.data;
            }
            else {
                state.user.email = payload
            }
            state.isLoading = false;
            state.isError = false;
            state.error = ""



        }).addCase(getUser.rejected, (state, action) => {


            state.isLoading = false;
            state.isError = true;
            state.error = action.error.message



        })


    }
})

export const { logOut, setUser, toggoleLoading } = counterSlice.actions

export default counterSlice.reducer