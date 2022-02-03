import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import "./CorporateHeader.css"

const CorporateHeader = () => {
    return (
        <div className='CorporateHeader'>
            <Nav.Link className='me-3' as={HashLink} to="/corporate#CorporateSingUp">
                GET STARTED
            </Nav.Link>
            <Nav.Link as={Link} to="/">
                ORDER NOW
            </Nav.Link>
        </div>
    );
};

export default CorporateHeader;