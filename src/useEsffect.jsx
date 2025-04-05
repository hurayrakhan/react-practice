import { useEffect, useState } from "react"
// import Friend from "./friends";

export default function Friends() {

    const [friends, setFriends] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setFriends(data))
        
    }, [])

    return( 
        <div className="card">
            <h3>cards: {friends.length}</h3>
            {
            friends.map(friend => <Friend key={friend.id} friend={friend}></Friend> )
        }
        </div>
        
    )
}

function Friend ({friend}) { 

    return(
        <div className="card">
            <h4>Name: {friend.name}</h4>
            <p>Email: {friend.email}</p>
        </div>
    )
}

