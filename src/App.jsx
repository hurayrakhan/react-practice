
import './App.css'
import ToDo from './ToDo';
import Bro from './brothers';
import Stars from './stars'

function App() {
  
  const brothers = ['Hurayra', 'Miskat', 'Raihan', 'Sajib'];
  const stars = [
    {id: 1, name: 'Hurayra khan', education:'Hons 3rd', goal: 'Web Developer'},
    {id: 2, name: 'Miskat khan', education:'Hons 3rd', goal: 'Go abroad'},
    {id: 3, name: 'Raihan khan', education:'class 5', goal: 'Electrical Engineer'},
    {id: 4, name: 'Sajib khan', education:'3rd semester', goal: 'Technical engineer'}
  ]
  return (
    <>
      {/* <h1>Hello React</h1>
      <br />
      <Developer name='Abu Hurayra Khan' passion='Student' level='Hons 3rd' goal='To be a Full-stack Developer'></Developer>
      <br />
      <ToDo hungry={true} name='Hurayra'></ToDo>
      <ToDo hungry={false} name='Miskat'></ToDo> */}

      {/* {
        brothers.map(brother => <Bro  name={brother}></Bro>)
      } */}

      {
        stars.map(star => <Stars key={star.id} name={star.name} education={star.education} goal={star.goal}></Stars>)
      }
    </>
  )
}


function Developer (props) {
  return(
    <div style={{borderRadius:'20px',border:'2px solid skyblue'}}>
      <h3>Name: {props.name}</h3>
      <p>Passion: {props.passion}</p>
      <p>Education level: {props.level}</p>
      <p>Goal: {props.goal}</p>
    </div>
  )
}

export default App
