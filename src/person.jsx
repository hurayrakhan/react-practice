export default function User ({person})  {
    
    return(
        <div className="card">
            <h4>Name: {person.name}</h4>
            <p>Email: {person.email}</p>
        </div>
    )
}