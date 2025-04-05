
import { Suspense } from 'react';
import './App.css'
import ToDo from './ToDo';
import Bro from './brothers';
import Counter from './counter';
import RunsCount from './runScore'
import Stars from './stars'
import Users from './api';
import Friends from './useEsffect';
import Countries from './Components/countries';

  const countriesPromise = fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json());

  function App() {
  return (
    
    <>
    <Suspense fallback={<p>Loading...</p>}>
      <Countries countriesPromise={countriesPromise}></Countries>
    </Suspense>
    {/* <Friends></Friends> */}

    {/* <Suspense fallback={<p>Loading...</p>}>
      <Users fetchUser={users}></Users>
    </Suspense> */}
    
    {/* <Suspense fallback={<h3>Loading...</h3>}>
    <RunsCount></RunsCount>
    </Suspense> */}



    </>
  )
}


export default App
