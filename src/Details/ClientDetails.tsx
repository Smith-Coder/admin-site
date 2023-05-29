import React from "react";
import { useParams, useLocation } from "react-router-dom";
const ClientDetails = () => {
    let { id } = useParams();
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const name = params.get("name");
    const permission = params.get("permission");
    const type = params.get("type");

    let Client = {
        code: id,
        name: name,
        permission: permission,
        type: type,
    };
    return (
        <div>
            <h1>Client Details of id {id}</h1>
            <div>
                Code : {Client.code}
                <br></br>
                Name : {Client.name}
                <br></br>
                Permission : {Client.permission}
                <br></br>
                anualSalary : {Client.type}
                <br></br>
            </div>
        </div>
    );
};

export default ClientDetails;