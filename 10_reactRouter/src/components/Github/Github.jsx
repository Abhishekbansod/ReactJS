import React, { useEffect, useState } from "react";

function Github() {

    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/Abhishekbansod').then((response) =>{
         let data = response.json()
         return data
        }).then((data) => {
            console.log(data);
            setData(data)
        })
    }, [])

    //here response is not returned but given only in one line
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/hiteshchoudhary')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])

    return (
        <div className="bg-green-500 p-4 text-center text-3xl text-white m-4">
            Github followers : {data.followers}
            <img className="border-solid border-x-4 border-y-4" src={data.avatar_url} width={200} />
        </div>
    )
}

export default Github