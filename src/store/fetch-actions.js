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
                capitalCity: el.capital[0],
                flag: el.flags.svg
            }
            dispatch(regionActions.addCountry(country))
        })
    }
}

export const fetchSpecificCountry = (country) => {
    return async (dispatch) => {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${country}`
        );
        const data = await response.json()

        console.log(data)

        data.forEach((el) => {
            const country = {
                name: el.name.common,
                flag: el.flags.svg,
                population: el.population,
                currencyName: el.currencies.name,
                currencySymbol: el.currencies.symbol,
                capital: el.capital[0],
                map: el.maps.googleMaps
            }
            dispatch(countryActions.addCountry(country))
        })
    }
}