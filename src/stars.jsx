export default function Stars (bro) {
    return(
        <div style={{borderRadius:'20px', border:'2px solid aqua', margin:'10px', padding:'30px'}}>
            <h3>Name: {bro.name} </h3>
            <p>Education: {bro.education} </p>
            <p>Goal: {bro.goal} </p>

        </div>
    )
}