import React from 'react'
import { Navigate, useNavigate } from "react-router-dom";
import queryString from 'query-string';
function Client() {
    const navigate = useNavigate();
    // const goDetails = (item: any) => {
    //     navigate("/dashboard/emp/details/" + item);
    // };
    const myObject = { key1: 'value1', key2: 'value2' };
    const queryStringified = queryString.stringify(myObject);
    let clients = [
        {
            id: 1,
            name: "Client 1",
            permission: "Admin",
            type: "Type 1",
        },
        {
            id: 2,
            name: "Client 2",
            permission: "User",
            type: "Type 2",
        },
        {
            id: 3,
            name: "Client 3",
            permission: "Guest",
            type: "Type 3",
        },
    ];
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope='col'>Client ID</th>
                        <th scope='col'>Client Name</th>
                        <th scope='col'>Client Permission</th>
                        <th scope='col'>Client Type</th>
                        <th scope='col'>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {clients.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.permission}</td>
                            <td>{item.type}</td>
                            <td>
                                <button onClick={() => navigate(`/dashboard/client/details/${item.id}?name=${item.name}&permission=${item.permission}&type=${item.type}`)} className='btn btn-primary'>Details</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className='btn btn-primary' onClick={() => navigate("/dashboard/client/add")}> Add User</button>
        </>
    )
}

export default Client