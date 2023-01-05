import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSpecificCountry } from "../store/fetch-actions";
import styles from "../store/_country.module.scss";

const Country = () => {
  const country = useSelector((state) => {
    return state.countrySlice.country;
  });

  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(fetchSpecificCountry(params.name));
    console.log(params.name);
  }, [dispatch, params.name]);

  return (
    <div className={styles["country-div"]}>
      <div className={styles.map}>{country.map}</div>
      <div className={styles.flag}>{country.flag} </div>
      <div className={styles["country-info"]}>
        <h2 className={styles.name}>{country.name} </h2>
        <h2 className={styles.capital}>{country.capital} </h2>
        <h2 className={styles.population}>{country.population} </h2>
      </div>
    </div>
  );
};

export default Country;
