import React, { use } from 'react';
import Country from './Country/Country';

const Countries = ({countriesPromise}) => {
    const countries = use(countriesPromise);

    return (
        <div>
            <h3>Hello World</h3>
            {
                countries.map(country => <Country key={country.flag} country={country}></Country>)
            }
        </div>
    );
};

export default Countries;