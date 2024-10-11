import React, { useState, useContext } from "react";
import UserContext from "../Context/userContext";


function Login() {

    let [username, setUsername] = useState('')
    let [password, setPassword] = useState('')

    //setUser came from UserContextProvider component
    //by using useContext hook we can access the date from other components
    //accesing setUser from UserContextProvider using useContext hook
    let {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
    return (
        <div>
            <h2>Login</h2>

            <input type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your Name" />

                {' '}
            <input type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your Password" />

            <button onClick={handleSubmit} >Submit</button>
        </div>
    )
}

export default Login