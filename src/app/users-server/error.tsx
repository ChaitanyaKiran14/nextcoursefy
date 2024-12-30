"use client"

import { useEffect } from "react"

export default function Error({error}: {error: Error}){
    useEffect(()=> {
        console.log(error)
    }, [error])

    return(
        <div className="flex items-center justify-center h-screen">
            <h1 className="text-2xl text-red-500">Error Fetching Data</h1>
        </div>
    )
}