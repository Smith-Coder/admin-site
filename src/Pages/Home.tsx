import React from 'react'

function Home() {
    const name = localStorage.getItem("uname")
    return (
        <h1>Welcome {name}
        </h1>
    )
}

export default Home