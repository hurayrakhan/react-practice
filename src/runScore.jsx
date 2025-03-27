import { useState } from "react"

export default function RunsCount () {
    const [runs, setRuns] = useState(0);
    const [over,setOver] = useState(0);

    const dotballHandler = ()=> {
        const newRuns = runs + 0;
        setRuns(newRuns);
    }
    const singleHandler = ()=> {
        const newRuns = runs + 1;
        setRuns(newRuns);
    }
    
    const twoHandler = ()=> {
        const newRuns = runs + 2;
        setRuns(newRuns);
    }
    const threeHandler = ()=> {
        const newRuns = runs + 3;
        setRuns(newRuns);
    }
    const fourHandler = ()=> {
        const newRuns = runs + 4;
        setRuns(newRuns);
    }
    const sixHandler = ()=> {
        const newRuns = runs + 6;
        setRuns(newRuns);
    }

    
    const overHandler = ()=> {
        const balls = over + 1;
        setOver(balls);
    }
    
    return(
        <div>
            <div style={{padding:'20px', border:'2px solid green', borderRadius: '10px'}}>
                <h2>Total Score: {runs} </h2>
                <h3>Over/Ball: {over}</h3>

            </div>
            <button onClick={()=>{
                dotballHandler()
                overHandler()
            }}>Dot Ball</button>

            <button onClick={singleHandler}>Single</button>

            <button onClick={twoHandler}>2 Runs</button>

            <button onClick={threeHandler}>3 Runs</button>

            <button onClick={fourHandler}>4 Runs</button>

            <button onClick={sixHandler}>6 Runs</button>

        </div>
    )
}