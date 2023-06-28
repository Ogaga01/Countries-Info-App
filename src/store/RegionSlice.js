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
  },
});

export const regionActions = regionSlice.actions;

export default regionSlice.reducer;
