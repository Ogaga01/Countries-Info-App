import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSpecificCountry } from "../store/fetch-actions";
import styles from "../sass/_country.module.scss";
import Spinner from "./Spinner";

const Country = () => {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    setLoading(true);
    dispatch(fetchSpecificCountry(params.name));
    setLoading(false);
  }, [dispatch, params.name]);

  const country = useSelector((state) => {
    return state.countrySlice.country;
  });

  useEffect(() => {
    if (!country.name) return;
    document.title = `Country | ${country.name}`;

    return () => {
      document.title = "Country Info";
    };
  }, [country.name]);

  if (loading) return <Spinner />;
  return (
    <div className={styles["country-div"]}>
      <div className={styles.map}>
        <img
          src={`https://geology.com/world/${country.name.toLowerCase()}-map.gif`}
          alt="Country map"
          className={styles.maps}
        />
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
