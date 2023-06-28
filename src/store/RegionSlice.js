import { createSlice } from "@reduxjs/toolkit";

const regionSlice = createSlice({
  name: "All Countries",
  initialState: {
    countries: [],
  },
  reducers: {
    addCountry(state, action) {
      const countries = action.payload;
      // state.countries.push(countries);
      state.countries = countries;
    },
    filterByContinent(state, action) {
      const value = action.payload;
      if (value.toLowerCase() === "all") {
        return state.countries;
      } else {
        state.countries = state.countries.filter((country) => {
          return country.continent.toLowerCase() === value.toLowerCase();
        });
      }
    },
  },
});

export const regionActions = regionSlice.actions;

export default regionSlice.reducer;
