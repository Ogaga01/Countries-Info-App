import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllCountries } from '../store/fetch-actions';

const Home = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllCountries())
    })

    return (
        <div>

        </div>
    );
};

export default Home;