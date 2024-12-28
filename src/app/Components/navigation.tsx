import Link from "next/link"


const Navigation  = () => {
    return (
        <div>
             <div className="flex items-center justify-center mt-10"> 
            <Link  href={'/'} className="mr-5 text-yellow-400">Home</Link>
            <Link  href={'/about'} className="mr-5 text-yellow-400">About</Link>
            <Link  href={'/products/1'} className="mr-5 text-yellow-400">Products</Link>

            <Link href={"/login"} className="text-green-400 ml-52 mr-10"> Login</Link>
            <Link href={"/register"} className="text-blue-600"> Register</Link>

        </div>
       
        </div>
       




    )

}
export default Navigation