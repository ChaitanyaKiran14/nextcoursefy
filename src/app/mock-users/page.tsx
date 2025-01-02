import axios from "axios";
import { revalidatePath } from "next/cache";
import { auth, currentUser } from "@clerk/nextjs/server";
//this is to refresh the page when the user submits the form and refresh the page.

type User =  {
    id : number;
    name: string;
    address : string;
}
const MockUsers = async  () => {
    
    //this is to get the current info about the logged in users info
    const authObj = await auth()
    const currentUserObj = await currentUser()
    console.log({
        authObj,
        currentUserObj
        
    })

          try {
            const response = await axios.get<User[]>("https://6604f29b2ca9478ea17ed412.mockapi.io/api/contacts/contacts");
            const users = response.data
            console.log(users)

            const addUser = async (formData : FormData) =>{
                //this takes a form data object as its parameter,which is a built-in browser API that provides a way to easily construct key value pairs representing form fields and their values within the function
                //we include the use server directive this is the directive that tells next Shar that this function should be executed on the server it is a key feature of server actions in nextjs

                "use server"
                const name = formData.get("name")
                const address = formData.get("address")
                //console.log(name)
                const response = await axios.post("https://6604f29b2ca9478ea17ed412.mockapi.io/api/contacts/contacts",{name, address})
                const val = await response.data
                revalidatePath("/mock-users")
                console.log(val)
            }

            return(
                <div>
                    <div className="p-6 m-4">
                        <form action={addUser}>
                            <input name="name" type="text" placeholder="Username" className="p-3 text-black mr-3 border rounded"/>
                            <input name="address" type="text" placeholder="address" className="p-3 text-black mr-3 border rounded"/>
                            <button type="submit" className="bg-blue-500 text-white rounded p-3 mr-3" >Add User</button>
                        </form>
                    </div>         
                    <ul className="grid grid-cols-5 gap-5 py-10 m-5">
                 {users.map((usr  => (
                     <li className="bg-blue-950 shadow-md rounded-lg  text-red-500 p-3" key={usr.id}>
                         {usr.name} - {usr.address}
                     </li>
                 )))}
         
                </ul>
                </div>
  
             )
            
          } catch (err) {
            console.log("Error Found")
            
          } 
        };
    


export default MockUsers