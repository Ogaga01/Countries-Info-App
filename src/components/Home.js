import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCountries } from "../store/fetch-actions";
import styles from '../sass/_home.module.scss'
import { Link } from "react-router-dom";

const Home = () => {
  const countries = useSelector((state) => {
    return state.regionSlice.countries;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCountries());
  }, [dispatch]);

  return (
    <>
      <div className={styles["country-div"]}>
        {countries.map(({name, flag, continent,}) => {
          return (
            <div key={name} className={styles["country-card"]}>
              <div className={styles.flags}>
                <img src={flag} alt="flag" className={styles.flag} />
              </div>
              <div className={styles["country-info"]}>
                <h1 className={styles.name}>{name}</h1>
                <h3 className={styles.continent}>{continent}</h3>
                <Link className={styles.link} to={name}>More info</Link>
              </div>
            </div>
          );
        })}
      </div>
      
    </>
  );
};

export default Home;
