import React from 'react'
interface Props {
    message: string;
}
function Header(props: Props) {
    return (
        <header>
            <h1>{props.message}</h1>
        </header>
    )
}

export default Header