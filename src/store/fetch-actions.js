import { regionActions } from "./RegionSlice";

export const fetchAllCountries = () => {
    return async (dispatch) => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json()

        console.log(data)

        data.forEach((el) => {
            const country = {
                name: el.name.common,
                continent: el.continents[0],
                capitalCity: el.capital[0],
                flag: el.flag.svg
            }
            dispatch(regionActions.addCountry(country))
        })
    }
}