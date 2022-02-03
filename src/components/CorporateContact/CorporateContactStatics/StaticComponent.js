import React, { useState } from 'react';

const StaticComponent = ({ content }) => {
    const [show, setShow] = useState(false)
    const { question, answer } = content
    return (
        <div>

            <strong>{question}</strong>
            <p className='mt-2 border-bottom pb-5'>
                {show ? answer : answer.slice(0, 100)} <span className='brand_color fw-bold' style={{ cursor: "pointer" }} onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</span>
            </p>
        </div>
    );
};

export default StaticComponent;