import React from 'react';

const CorporateFaqAccordion = ({ accordion, handleAccordion, faq }) => {
    const { id, question, answer } = faq
    return (
        <li className={accordion === `accordion${id}` && "open"} onClick={() => handleAccordion(`accordion${id}`)}>
            <h4>{question}</h4>
            <p>{answer}</p>
        </li>
    );
};

export default CorporateFaqAccordion;