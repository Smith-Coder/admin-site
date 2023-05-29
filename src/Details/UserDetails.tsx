import React from 'react'
import { useParams, useLocation } from "react-router-dom";

function UserDetails() {
    let { id } = useParams();
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    //username=${item.username}&companyId=${item.companyId}&companyName=${item.companyName}&permission=${item.userPermission}&userType=${item.userType}`)} className='btn btn-primary'
    const username = params.get("username");
    const companyId = params.get("companyId");
    const companyName = params.get("companyName");
    const permission = params.get("permission");
    const userType = params.get("userType");
    let User = {
        uid: "1a",
        username: username,
        companyId: companyId,
        companyName: companyName,
        userPermission: permission,
        userType: userType,
    };
    return (
        <div>
            <h1>User Details of id {id}</h1>
            <div>
                Id : {User.uid}
                <br></br>
                User Name : {User.username}
                <br></br>
                Company Id : {User.companyId}
                <br></br>
                Company Name : {User.companyName}
                <br></br>
                User Permission : {User.userPermission}
                <br></br>
                User Type : {User.userType}
                <br></br>
            </div>
        </div>
    )
}

export default UserDetails