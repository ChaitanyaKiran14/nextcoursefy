import axios from "axios";
type User =  {
    id : number;
    username: string;
    email : string;
}

const UsersServer = async  () => {
    //here in server side fetching we are directly using async to the function...
          try {

            //intentionally making the server call wait for 2 seconds
            //await new Promise((resolve) => setTimeout(resolve, 2000))

            const response = await axios.get<User[]>("https://jsonplaceholder.typicode.com/users/hj");
            const users = response.data
            return(
                <ul className="space-y-3 p-6 m-4">
                 {users.map((usr  => (
                     <li className="bg-blue-950 shadow-md rounded-lg  text-red-500 p-3" key={usr.id}>
                         {usr.username} - {usr.email}
                     </li>
                 )))}
         
                </ul>
             )
            
          } catch (err) {
            console.log("Error Found")
            
          } 
        };
    


export default UsersServer