import { countryActions } from "./CountrySlice";
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
                capitalCity: el.capital,
                flag: el.flags.png
            }
            dispatch(regionActions.addCountry(country))
        })
    }
}

export const fetchSpecificCountry = (countryName) => {
    return async (dispatch) => {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${countryName}`
        );
        const data = await response.json()

        console.log(data)

        
            const country = {
              name: data[0].name.common,
              flag: data[0].flags.svg,
              population: data[0].population,
              capital: data[0].capital[0],
              map: data[0].maps.googleMaps,
            };
            dispatch(countryActions.addCountry(country))
        
    }
}