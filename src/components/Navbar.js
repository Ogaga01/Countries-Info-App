import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, Route, Routes } from "react-router-dom";
import { regionActions } from "../store/RegionSlice";
import Home from "./Home";

const Navbar = () => {
    const [searchValue, setSearchValue] = useState("");
    
    const dispatch = useDispatch()

  const inputSearch = (e) => {
      setSearchValue(e.target.value);

      console.log(e.target.value)
      
        dispatch(regionActions.searchCountry(searchValue))
  };

  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Countries Info</NavLink>
        </nav>
        <div>
          <input
            type="text"
            value={searchValue}
            onChange={inputSearch}
            placeholder="Search Country"
          />
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default Navbar;
