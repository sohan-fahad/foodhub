import React from 'react';
import { Modal } from 'react-bootstrap';
import "./ResponsiveFilter.css"

const ResponsiveFilter = ({ show, handleClose, fullscreen }) => {
    return (
        <div className='ResponsiveFilter'>
            <Modal
                show={show}
                onHide={handleClose}
                animation={true}
                fullscreen={fullscreen}
            >
                <div style={{ position: "relative", height: "auto", backgroundColor: "#fff" }}>
                    <i className="fas fa-times" onClick={handleClose} style={{ position: "absolute", top: "20px", left: "20px" }}></i>

                    <div style={{ height: "100vh", padding: "30px" }}>
                        <h3 style={{ margin: "30px 0" }}>Filter</h3>
                        <span className='me-2 second_title'>OFFERS</span>
                        <span className='me-2 second_title'>CUISINES</span>
                        <span className='me-2 second_title'>OTHER VARIETIES</span>
                        <span className=' second_title'>PRICE</span>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default ResponsiveFilter;