import React from 'react'
interface Props {
    message: string;
}
function Footer(props: Props) {
    return (
        <footer>
            <p>{props.message}</p>
        </footer>
    )
}

export default Footer