import React, { useRef, useState } from 'react';
import "./CorporateFaq.css"
import CorporateFaqAccordion from './CorporateFaqAccordion';
import FAQimg from "../../../images/FAQimg.jpg"
import { useNavigate } from 'react-router';

const CorporateFaq = () => {

    const navigate = useNavigate()

    const accordionArray = [
        {
            "id": 1,
            "question": "Is the platform free to use?",
            "answer": "Absolutely. There are no additional charges or hidden fees. Your company is only billed when you order food using credits."
        },
        {
            "id": 2,
            "question": "What are the benefits",
            "answer": "Other than getting access to exclusive vendors, menus and discounts, our platform helps you manage a comprehensive corporate meal program at ease!"
        },
        {
            "id": 3,
            "question": "Is my employee data safe?",
            "answer": "Absolutely. There are no additional charges or hidden fees. Your company is only billed when you order food using credits."
        },
    ]

    const [accordion, setAccordion] = useState("")

    const handleAccordion = (accordion) => {
        setAccordion(accordion)
    }
    return (
        <div className='CorporateFaq'>
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-6 col-12">
                        <div>
                            <h3>Frequently asked questions</h3>
                            <p>Got questions? Great, here’s what you need to know before we get started.</p>
                            <ul className="accordion section-list">
                                {
                                    accordionArray.map(pd =>
                                        <CorporateFaqAccordion key={pd?.id} accordion={accordion} faq={pd} handleAccordion={handleAccordion} />
                                    )
                                }

                            </ul>
                            <button className="button" onClick={() => navigate("/corporate/contact")}>VISIT THE HELP CENTRE</button>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <img src={FAQimg} alt="" className='img-fluid w-100' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CorporateFaq;