import React from 'react';
import { Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { HashLink } from 'react-router-hash-link';
import "./CorporateHero.css"

const CorporateHero = () => {
    const navigate = useNavigate()
    return (
        <div className='CorporateHero'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className="CorporateHero_wrapper">
                            <h1>More than just food for work</h1>
                            <p>Feed your co-workers and clients the way they want to be fed – with great food from the best restaurants, whether it's to fuel work-from-home, late nights in the office, corporate events, client meetings, and much more.</p>
                            <Nav.Link as={HashLink} to="/corporate#CorporateSingUp">
                                GET STARTED
                            </Nav.Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CorporateHero;