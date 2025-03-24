export default function ToDo({ hungry, name }) {
    if (hungry) {
        return (
            <h4 style={{ border: '2px solid blue', backgroundColor: "white", color: "blue", borderRadius: '10px', padding:'20px' }}>{name} is hungry please give him some food.</h4>
        )
    }
    else {
        return (
            <h4 style={{ border: '2px solid blue', backgroundColor: "white", color: "blue", borderRadius: '10px', padding:'20px' }}>{name} not hungry. He is strong</h4>
        )
    }
}