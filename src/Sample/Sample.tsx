import React, { useEffect, useRef } from "react";
const Sample1 = () => {
    const ref = useRef<HTMLInputElement>(null);
    //manipulate the textbox or html textbox control
    useEffect(() => {
        if (ref.current) ref.current.focus();
    });
    // useEffect(() => {
    //     document.title = "Hello World!";
    // });
    return (
        <div>
            <input
                ref={ref}
                type="text"
                id="t1"
                className="forms controls"></input>
        </div>
    );
};
export default Sample1;