import React, {useContext} from "react";
import UserContext from "../Context/userContext";


function Profile(){

    let {user} = useContext(UserContext)

    if(!user) return <div>Login with Credentials!</div>

    return <div>Welcome {user.username} </div>
}

export default Profile