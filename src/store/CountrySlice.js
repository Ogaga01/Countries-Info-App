import { createSlice } from "@reduxjs/toolkit";

const countrySlice = createSlice({
    name: 'Country',
    initialState: {
        country: {},
    },
    reducers: {
        addCountry(state, action) {
            const country = action.payload
            state.country = country
        }
    }
})

export const countryActions = countrySlice.actions

export default countrySlice.reducer