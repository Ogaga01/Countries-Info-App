import { configureStore } from "@reduxjs/toolkit";
import regionReducer from "./RegionSlice";
import countryReducer from "./CountrySlice";

const store = configureStore({
  reducer: { regionSlice: regionReducer, countrySlice: countryReducer },
});

export default store;
