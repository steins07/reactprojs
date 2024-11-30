// import { useState } from "react"
import { useLoaderData } from "react-router-dom"
// import { useEffect } from "react"

function Github() {
    // const [data, setData] = useState("")
    // useEffect(() => {
    //     fetch('https://api.github.com/users/steins07')
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             setData(data)
    //         })
    // }, [])
    const data = useLoaderData()
    if (!data) {
        return <div>Loading...</div>;
    }
    console.log(data)
    return (
        <div className="flex items-center justify-center bg-slate-700 text-center m-4 p-4 text-3xl text-white/70">
            <div className="flex flex-col items-center">
                <div>Github follower: {data.followers}</div>
                <img
                    className="mt-4"
                    src={data.avatar_url} alt="Avatar"
                    width={300}
                />
            </div>
        </div>

    )
}

export default Github

export const githubInfoLoader = async ()=>{
   const res= await fetch('https://api.github.com/users/steins07')
   return res.json();
}  
