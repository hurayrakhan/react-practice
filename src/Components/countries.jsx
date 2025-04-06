import React, { use, useState } from 'react';
import Country from './Country/Country';
import './countries.css'


const Countries = ({countriesPromise}) => {
    const [visited, setVisited] = useState([]);

    const countries = use(countriesPromise);

    const handleVisitedCountries = (country) => {
        console.log('I have been visited')
        const newVisitedCountries = [...visited,country];
        setVisited(newVisitedCountries);
    }

    return (
        <div>
            <h2>Hello World</h2>
            <h3>Visited countries: {visited.length}</h3>            
            <h4>List of Visited countries:</h4>
            <ol>
                {
                visited.map(country => <li>{country.name.common}</li>)
                }
            </ol>    
            
            <div className='countries'>
                {
                    countries.map(country => <Country 
                        key={country.flag}
                        country={country}
                        handleVisitedCountries={handleVisitedCountries}>
                        </Country>)
                }
            </div>
        </div>
    );
};

export default Countries;