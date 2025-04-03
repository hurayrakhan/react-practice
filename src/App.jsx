
import { Suspense } from 'react';
import './App.css'
import ToDo from './ToDo';
import Bro from './brothers';
import Counter from './counter';
import RunsCount from './runScore'
import Stars from './stars'
import Users from './api';

function App() {
  
  const data = async () => {
    const ref = await fetch("https://jsonplaceholder.typicode.com/users")
    return ref.json()

  }
  const users = data()
  return (
    
    <>

    <Suspense fallback={<p>Loading...</p>}>
      <Users users={users}></Users>
    </Suspense>
    
    {/* <Suspense fallback={<h3>Loading...</h3>}>
    <RunsCount></RunsCount>
    </Suspense> */}



    </>
  )
}


export default App
