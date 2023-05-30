import React, { useEffect, useState } from 'react'
import axios from "axios";
interface Users {
    id: number;
    name: string;
}
const UserListSimple = () => {
    const [users, setUsers] = useState<Users[]>([]);
    const [error, setErrors] = useState("");

    useEffect(() => {
        const myTimeout = setTimeout(() => {

            axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
                console.log(res.data);
                setUsers(res.data);
            }).catch((err) => {
                console.log(err);
                setErrors(err.message);
            })
        }, 5000);
    }, []);
    return (
        <div>
            {error &&
                <p>{error}</p>
            }
            <ul>
                {users.map((x) => (
                    <li key={x.id}>id: {x.id}, name: {x.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default UserListSimple