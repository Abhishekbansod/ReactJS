import React from "react";
import { useParams } from "react-router-dom";

function User(){

    const {userId} = useParams()

    return(
        <>
        <div className="bg-green-600 p-3">
        User ID : {userId}
        </div>
        </>
    )
}

export default User