import React from 'react';
import "./CorporateVisibility.css"
import visibilityImg from "../../../images/corporatevisibility.jpg"
import { Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

const CorporateVisibility = () => {
    return (
        <div className="CorporateVisibility">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-6 col-12">
                        <img src={visibilityImg} alt="" className='w-100 img-fluid' />
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="CorporateVisibility_info">
                            <h3>Visibility on all expenses</h3>
                            <p>Don’t stress. We designed foodhub for business for full visibility of orders on a single dashboard – so you can forget about counting hundreds of receipts.</p>

                            <ul>

                                <li>Set allowance limits based on day, time, location, service</li>
                                <li>Easy employee management, onboarding, and compliance</li>
                                <li>Streamlined monthly or bi-monthly invoicing</li>
                                <li>Pre-orders up to 14 days in advance</li>
                                <li>Dedicated account manager</li>
                            </ul>

                            <Nav.Link as={HashLink} to="/corporate#CorporateSingUp">
                                FIND OUT MORE
                            </Nav.Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CorporateVisibility;