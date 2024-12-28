"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Navigation  = () => {
    const pathname = usePathname()
    return (
        <div>
             <div className="flex items-center justify-center mt-10  bg-transparent"> 
            <Link  href={'/'} className={pathname ==="/"?  "font-bold mr-5 text-blue-700" : "mr-5"}      >Home</Link>
            <Link  href={'/about'} className={pathname ==="/about"?  "font-bold mr-5 text-blue-700" : "mr-5"} >About</Link>
            <Link  href={'/products/1'} className={pathname ==="/products/1"?  "font-bold mr-5 text-blue-700" : "mr-5"} >Products</Link>

            <Link href={"/login"} className="text-green-400 ml-52 mr-10"> Login</Link>
            <Link href={"/register"} className="text-yellow-900"> Register</Link>

        </div>
       
        </div>
       




    )

}
export default Navigation