import React, { use } from 'react';
import Country from './Country/Country';

const Countries = ({countries}) => {
    const countriesData = use(countries)
    console.log(countries)
    return (
        <div>
            <h3>Hello World</h3>
            {
                countriesData.map(country => <Country ></Country>)
            }
        </div>
    );
};

export default Countries;