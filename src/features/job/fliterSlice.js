import { createSlice } from "@reduxjs/toolkit"

const initialState = {

    date: [],
    approval: [],
    isLoading: false,
    isError: false
}

const filterSlice = createSlice({

    name: "filter",
    initialState,
    reducers: {

        filterByDate: (state, { payload }) => {

            state.date = payload
        }
    }
})

export const { filterByDate } = filterSlice.actions;
export default filterSlice.reducer