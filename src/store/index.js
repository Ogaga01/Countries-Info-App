import { configureStore } from "@reduxjs/toolkit";
import regionReducer from './RegionSlice'

const store = configureStore({
    reducer: {regionSlice: regionReducer }
})

export default store