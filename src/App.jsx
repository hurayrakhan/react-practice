
import './App.css'

function App() {
  

  return (
    <>
      <h1>Hello React</h1>
      <br />
      <Developer name='Abu Hurayra Khan' passion='Student' level='Hons 3rd' goal='To be a Full-stack Developer'></Developer>
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
