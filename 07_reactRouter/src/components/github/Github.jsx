import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()

    // const[data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/Ronak501')
    //     .then(Response => Response.json())
    //     .then(data => {
    //         setData(data)
    //     })
    // })

    

  return (
    <div className='text-center m-4 bg-gray-600 text-black p-4 text-3xl'>Github Followers:{data.followers}
</div>
  )
}

export const githubInfoLoader = async () => {
    const Response = await fetch('https://api.github.com/users/Ronak501')

    return Response.json()
}

export default Github