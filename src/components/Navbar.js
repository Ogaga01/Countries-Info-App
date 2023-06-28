import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { regionActions } from "../store/RegionSlice";
import { searchCountry } from "../store/fetch-actions";
import styles from "../sass/_navbar.module.scss";

const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [filterValue, setFilterValue] = useState("");

  const dispatch = useDispatch();

  const inputSearch = (e) => {
    setSearchValue(e.target.value);
  };

  console.log(searchValue);

  useEffect(() => {
    // dispatch(regionActions.searchCountry(searchValue));
    // if (searchValue.length < 3) return;

    dispatch(searchCountry(searchValue));
  }, [dispatch, searchValue]);

  const handleOption = (e) => {
    setFilterValue(e.target.value);
    console.log(e.target.value);
  };

  useEffect(() => {
    dispatch(regionActions.filterByContinent(filterValue));
  }, [dispatch, filterValue]);

  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Countries Info</NavLink>
        </nav>
        <div className={styles.select}>
          <label htmlFor="continent">Filter by Continents</label>
          <select id="continents" name="continents" onChange={handleOption}>
            <option value="all">All</option>
            <option value="africa">Africa</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="north america">North America</option>
            <option value="south america">South America</option>
            <option value="oceania">Oceania</option>
          </select>
        </div>
        <div className={styles.search}>
          <input
            type="text"
            value={searchValue}
            onChange={inputSearch}
            placeholder="Search Country"
          />
        </div>
      </header>
    </>
  );
};

export default Navbar;
