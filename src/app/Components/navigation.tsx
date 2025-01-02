"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { SignInButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs"




const Navigation  = () => {
    const pathname = usePathname()
    return (
        <div>
             <div className="flex items-center justify-center mt-10  bg-transparent"> 
            <Link  href={'/'} className={pathname ==="/"?  "font-bold mr-5 text-blue-700" : "mr-5"}      >Home</Link>
            <Link  href={'/about'} className={pathname ==="/about"?  "font-bold mr-5 text-blue-700" : "mr-5"} >About</Link>
            <Link  href={'/products/1'} className={pathname ==="/products/1"?  "font-bold mr-5 text-blue-700" : "mr-5"} >Products</Link>
            <Link  href={'/mock-users'} className={pathname ==="/mock-users"?  "font-bold mr-5 text-blue-700" : "mr-5"} >Mock Users</Link>
            <div className="pr-10 mr-9">
               
                <SignedOut>
                <SignInButton  mode="modal" /> 
                </SignedOut>

                <SignedIn>
                <UserButton/>
                </SignedIn>
           
           
            </div>
           
            

        </div>
       
        </div>
       




    )

}
export default Navigation