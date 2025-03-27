import { useState } from "react"

export default function RunsCount () {
    const [runs, setRuns] = useState(0);
    const [balls, setBalls] = useState(0);
    const [over,setOver] = useState(0);

    const dotballHandler = ()=> {
        const newRuns = runs + 0;
        setRuns(newRuns);
        const newBalls = balls + 1;
        setBalls(newBalls);
    }
    const singleHandler = ()=> {
        const newRuns = runs + 1;
        setRuns(newRuns);
        const newBalls = balls + 1;
        setBalls(newBalls);
    }
    
    const twoHandler = ()=> {
        const newRuns = runs + 2;
        setRuns(newRuns);
        const newBalls = balls + 1;
        setBalls(newBalls);
    }
    const threeHandler = ()=> {
        const newRuns = runs + 3;
        setRuns(newRuns);
        const newBalls = balls + 1;
        setBalls(newBalls);
    }
    const fourHandler = ()=> {
        const newRuns = runs + 4;
        setRuns(newRuns);
        const newBalls = balls + 1;
        setBalls(newBalls);
    }
    const sixHandler = ()=> {
        const newRuns = runs + 6;
        setRuns(newRuns);
        const newBalls = balls + 1;
        setBalls(newBalls);
    }

    const ballsHandler = (balls) => {
        const overDone = 0;
        if(balls > 6){

            setBalls(overDone);
            
        }
        return balls;
    }
    const overHandler = (balls) => {
        if(balls > 6){
            const newOver = over + 1;
            setOver(newOver);   
        }
        return over;
    }
    
    return(
        <div>
            <div style={{padding:'20px', border:'2px solid green', borderRadius: '10px', marginBottom:'20px'}}>
                <h2>Total Score: {runs} </h2>
                <h3>Over/Ball: {overHandler(balls)} / {ballsHandler(balls)}</h3>

            </div>
            <button onClick={dotballHandler}>Dot Ball</button>

            <button onClick={singleHandler}>Single</button>

            <button onClick={twoHandler}>2 Runs</button>

            <button onClick={threeHandler}>3 Runs</button>

            <button onClick={fourHandler}>4 Runs</button>

            <button onClick={sixHandler}>6 Runs</button>

        </div>
    )
}