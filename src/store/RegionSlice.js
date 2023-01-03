import { createSlice } from "@reduxjs/toolkit";

const regionSlice = createSlice({
    name: 'All Countries',
    initialState: {
        countries: [],
    },
    reducers: {
        addCountry(state, action) {
            const country = action.payload
            state.countries.push(country)
        },
        searchCountry(state, action) {
            const value = action.payload
            state.countries = state.countries.filter((country)=>{return country.name.startsWith(value)})
        },
        filterByContinent(state, action) {
            const value = action.payload
            state.countries = state.countries.filter((country)=>{return country.continent.includes(value)})
        }
    }
})

export const regionActions = regionSlice.actions

export default regionSlice.reducer