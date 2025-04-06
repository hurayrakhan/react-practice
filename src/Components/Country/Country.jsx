import React, { useState } from 'react';
import './country.css'



const Country = ({country, handleVisitedCountries}) => {
    const [visit, setVisit] = useState(false)

    const handleVisit = () => {
    setVisit(!visit);
    handleVisitedCountries(country);
    }

    return (
        <div className={`country ${visit && 'visited'}`}>
            <h3>Name: {country.name.common}</h3>
            <img style={{height:'200px', width:'100%'}} src={country.flags.png} alt="" />
            <p>Independent: {country.independent ? 'Free' : 'Not Free'}</p>
            <button onClick={handleVisit}>{visit ? 'Visited' : 'Visit'}</button>
        </div>
    );
};

export default Country;