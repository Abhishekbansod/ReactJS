import React, { useState } from "react";
import UserContext from "./userContext";

// this method provides the data to the childrens/all the components

const UserContextProvider = ({children}) => {
    //here we can make an API call to get the data from database instead of setting state
    let [user, setUser] = useState(null)
    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider