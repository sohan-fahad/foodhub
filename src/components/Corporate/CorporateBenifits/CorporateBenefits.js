import React from 'react';
import { Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import benefits from "../../../images/CorporateBenefits.jpg"
import "./CorporateBenefits.css"

const CorporateBenefits = () => {
    return (
        <div className="CorporateBenefits">
            <div className="container">
                <div className="row g-5">

                    <div className="col-lg-6 col-12">
                        <div className="CorporateBenefits_info">
                            <h3>Benefits that go beyond tasty
                                dishes</h3>
                            <p>Create a better workplace, powered by food. Here are just some of the perks of Food Hub for business.</p>
                            <ul>
                                <li>Improve employee satisfaction and retention</li>
                                <li>Encourage cohesion and cooperation</li>
                                <li>Increase team productivity and morale</li>
                                <li>Access to exclusive corporate menus and discounts</li>
                            </ul>
                            <Nav.Link as={HashLink} to="/corporate#CorporateSingUp">
                                FIND OUT MORE
                            </Nav.Link>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <img src={benefits} alt="" className='w-100 img-fluid' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CorporateBenefits;