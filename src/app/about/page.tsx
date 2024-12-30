"use client"
import { useRouter } from "next/navigation"
const Blog = () => {
    //invoke the useRouter hook 
    const router = useRouter()

    return(
        <div className="items-center justify-items-center m-10  ">
            <h1>Hey Chaitu this is from About</h1>
            <br/>
            <button onClick={()=> router.push("/")}  className="bg-blue-500 p-2 rounded-md">Go Home</button>
           
        </div>
       
    )

}
export default Blog