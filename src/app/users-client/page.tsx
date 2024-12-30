"use client"
import axios from "axios";
import { useState, useEffect } from "react"

type User =  {
    id : number;
    username: string;
    email : string;
}

const UsersClient = () => {
    const [users,setUsers] = useState<User[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>("")

    useEffect(() => {
        const fetchUsers = async () => {
          try {
            setLoading(true)
            const response = await axios.get<User[]>("https://jsonplaceholder.typicode.com/users");
            setUsers(response.data);
            setLoading(false)
            
          } catch (err) {
            setError("Failed to fetch users"); 
          } 
        };
    
        fetchUsers();
      }, []);
    

    return(
       <ul className="space-y-3 p-6 m-4">
        {users.map((usr  => (
            <li className="bg-blue-950 shadow-md rounded-lg  text-green-500 p-3" key={usr.id}>
                {usr.username} - {usr.email}
            </li>
        )))}

       </ul>
    )

}
export default UsersClient

