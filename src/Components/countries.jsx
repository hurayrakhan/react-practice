import React, { use } from 'react';
import Country from './Country/Country';
import './countries.css'


const Countries = ({countriesPromise}) => {
    const countries = use(countriesPromise);

    return (
        <div>
            <h3>Hello World</h3>
            <div className='countries'>
                {
                    countries.map(country => <Country key={country.flag} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;