import { use } from "react"
import User from "./person";

export default function Users ({users}) {
    const user = use(users);
    
    return(
        <div className="card">
            <h3>Users</h3>
        </div>

    )
}

