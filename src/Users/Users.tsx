import React from 'react'
import { Navigate, useNavigate } from "react-router-dom";
function Users() {
    const navigate = useNavigate();
    const goDetails = () => {
        navigate("/details/");
    };
    let Users = [
        {
            uid: "1a",
            username: "JohnDoe",
            companyId: "c1",
            companyName: "Company 1",
            userPermission: "Admin",
            userType: "Type 1",
        },
        {
            uid: "2b",
            username: "JaneSmith",
            companyId: "c2",
            companyName: "Company 2",
            userPermission: "User",
            userType: "Type 2",
        },
        {
            uid: "3c",
            username: "MichaelJohnson",
            companyId: "c3",
            companyName: "Company 3",
            userPermission: "Guest",
            userType: "Type 3",
        },
    ];
    return (
        <>
            <table className='table'>
                <thead>
                    <tr>
                        <th scope='col'>UID</th>
                        <th scope='col'>UserName</th>
                        <th scope='col'>Company ID</th>
                        <th scope='col'>Company Name</th>
                        <th scope='col'>User Permission</th>
                        <th scope='col'>User Type</th>
                        <th scope='col'>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {Users.map((item, index) => (
                        <tr key={index}>
                            <td>{item.uid}</td>
                            <td>{item.username}</td>
                            <td>{item.companyId}</td>
                            <td>{item.companyName}</td>
                            <td>{item.userPermission}</td>
                            <td>{item.userType}</td>
                            <td>
                                <button onClick={() => navigate(`/dashboard/users/details/${item.uid}?username=${item.username}&companyId=${item.companyId}&companyName=${item.companyName}&permission=${item.userPermission}&userType=${item.userType}`)} className='btn btn-primary'>Details</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={() => navigate("/dashboard/client/add")} className='btn btn-primary'> Add User</button>
        </>
    )
}

export default Users