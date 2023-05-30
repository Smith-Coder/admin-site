import React, { useEffect, useState } from 'react'

const EmployeeList = () => {
    const [name, setName] = useState<string[]>([]);
    useEffect(() => {
        console.log("Read data from API")
        setName(["ranna", "kumar"])
    }, [])
    return (
        <div>
            <p>Employee List</p>
        </div>
    )
}

export default EmployeeList;