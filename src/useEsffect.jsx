import { useEffect, useState } from "react"

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
            friends.map(friend => <Friend friend={friend}></Friend> )
        }
        </div>
        
    )
}

function Friend (friend) { 
    const [name, email] = friend
    return(
        <div className="card">
            <h4>Name: {name}</h4>
            <p>Email: {email}</p>
        </div>
    )
}
