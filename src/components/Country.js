import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchSpecificCountry } from '../store/fetch-actions';

const Country = () => {
    const dispatch = useDispatch()
    const params = useParams()

    useEffect(() => {
        dispatch(fetchSpecificCountry(params.name))
        console.log(params.name)
    }, [dispatch, params.name])


    return (
        <div>
            
        </div>
    );
};

export default Country;