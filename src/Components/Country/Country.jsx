import React, { useState } from 'react';
import './country.css'



const Country = ({country}) => {
    const [visit, setVisit] = useState(false)

    const handleVisit = () => {
    setVisit(!visit);
    }

    console.log(country)
    return (
        <div className={`country ${visit && 'visited'}`}>
            <h3>Name: {country.name.common}</h3>
            <img src={country.flags.png} alt="" />
            <p>Independent: {country.independent ? 'Free' : 'Not Free'}</p>
            <button onClick={handleVisit}>{visit ? 'Visited' : 'Visit'}</button>
        </div>
    );
};

export default Country;