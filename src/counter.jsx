import { useState } from "react"

export default function Counter () {
    const style = {
        border: "2px solid skyblue",
        color: 'black',
        backgroundColor: 'white',
        padding: '20px',
        margin:'20px',
        borderRadius:'15px'
    }
    const [count, setCount]= useState(0);

    const handleCount = () => {
        const newCount = count + 1;
        setCount(newCount);
    }

    return(
        <div style={style}>
            <h2>Count: {count}</h2>
            <button onClick={handleCount}>Click</button>
        </div>
    )
}