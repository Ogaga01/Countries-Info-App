import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCountries } from "../store/fetch-actions";
import styles from '../sass/_home.module.scss'

const Home = () => {
  const countries = useSelector((state) => {
    return state.regionSlice.countries;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCountries());
  }, [dispatch]);

  return (
    <div className={styles['country-div']}>
      {countries.map((country) => {
        return (
          <div className={styles["country-card"]}>
            <div className={styles.flags}>
              <img src={country.flag} alt="flag" className={styles.flag} />
            </div>
            <div className={styles["country-info"]}>
              <h1 className={styles.name}>{country.name}</h1>
              <h3 className={styles.continent}>{country.continent}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
