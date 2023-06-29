import { countryActions } from "./CountrySlice";
import { regionActions } from "./RegionSlice";

export const fetchAllCountries = () => {
  return async (dispatch) => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();

    const countries = [];

    data.forEach((el) => {
      const country = {
        name: el.name.common,
        continent: el.continents[0],
        capitalCity: el.capital,
        flag: el.flags.png,
      };
      countries.push(country);
    });
    dispatch(regionActions.addCountry(countries));
  };
};

export const fetchSpecificCountry = (countryName) => {
  return async (dispatch) => {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${countryName}`
    );
    const data = await response.json();

    const country = {
      name: data[0].name.common,
      flag: data[0].flags.png,
      population: data[0].population,
      capital: data[0].capital[0],
      map: data[0].maps.googleMaps,
    };
    dispatch(countryActions.addCountry(country));
  };
};

export const searchCountry = (countryName) => {
  return async (dispatch) => {
    const response = await fetch(
      countryName !== ""
        ? `https://restcountries.com/v3.1/name/${countryName}`
        : "https://restcountries.com/v3.1/all"
    );
    const data = await response.json();

    const countries = [];

    data.forEach((el) => {
      const country = {
        name: el.name.common,
        continent: el.continents[0],
        capitalCity: el.capital,
        flag: el.flags.png,
      };
      countries.push(country);
    });
    dispatch(regionActions.addCountry(countries));
  };
};

export const filteredCountries = (continent) => {
  return async (dispatch) => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();

    const countries = [];

    if (continent.toLowerCase() === "all") {
      const countries = [];

      data.forEach((el) => {
        const country = {
          name: el.name.common,
          continent: el.continents[0],
          capitalCity: el.capital,
          flag: el.flags.png,
        };
        countries.push(country);
      });
      dispatch(regionActions.addCountry(countries));
    } else {
      const filtered = data.filter((country) => {
        return country.continents[0].toLowerCase() === continent.toLowerCase();
      });
      console.log(filtered);

      filtered.forEach((el) => {
        const country = {
          name: el.name.common,
          continent: el.continents[0],
          capitalCity: el.capital,
          flag: el.flags.png,
        };
        countries.push(country);
      });
      dispatch(regionActions.addCountry(countries));
    }
  };
};
