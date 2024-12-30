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
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string>("")

    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const response = await axios.get<User[]>("https://jsonplaceholder.typicode.com/users");
            setUsers(response.data);
            console.log(response.data) 
          } catch (err) {
            setError("Failed to fetch users"); 
            console.log("error", err)
          } 
        };
    
        fetchUsers();
      }, []);
    

    return(
       <ul className="space-y-3 p-6 m-4">
        {users.map((usr => (
            <li className="bg-blue-950 shadow-md rounded-lg  text-yellow-500 p-3" key={usr.id}>
                {usr.username} - {usr.email}
            </li>
        )))}

       </ul>
    )

}
export default UsersClient

