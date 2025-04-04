import { use } from "react"
import User from "./person";

export default function Users ({fetchUser}) {
    const user = use(fetchUser);
    
    return(
        <div className="card">
            <h3>Users: {user.length}</h3>
        </div>

    )
}

