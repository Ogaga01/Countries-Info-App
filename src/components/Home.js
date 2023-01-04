import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCountries } from "../store/fetch-actions";

const Home = () => {
  const countries = useSelector((state) => {
    return state.regionSlice.countries;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCountries());
  });

  return (
    <>
      {countries.map((country) => {
        return (
          <div className={styles["country-card"]}>
            <div className={styles.flag}>
              <img src={country.flag} alt="flag" />
            </div>
            <div className={styles["country-info"]}>
              <h1 className={styles.name}>{country.name}</h1>
              <h3 className={styles.capital}>{country.capital}</h3>
              <h5 className={styles.continent}>{country.continent}</h5>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Home;
