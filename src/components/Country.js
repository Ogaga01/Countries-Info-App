import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSpecificCountry } from "../store/fetch-actions";
import styles from "../sass/_country.module.scss";

const Country = () => {
  const country = useSelector((state) => {
    return state.countrySlice.country;
  });

  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(fetchSpecificCountry(params.name));
  }, [dispatch, params.name]);

  return (
    <div className={styles["country-div"]}>
      <div className={styles.map}>
        <img src={country.map} alt="Country map" />
      </div>
      <div className={styles.flag}>
        <img src={country.flag} alt="Country flag" className={styles.flags} />{" "}
      </div>
      <div className={styles["country-info"]}>
        <h2 className={styles.name}>Name: {country.name} </h2>
        <h2 className={styles.capital}>Capital City: {country.capital} </h2>
        <h2 className={styles.population}>
          Population: {(country.population / 1000000).toFixed(1)}M people{" "}
        </h2>
      </div>
    </div>
  );
};

export default Country;
