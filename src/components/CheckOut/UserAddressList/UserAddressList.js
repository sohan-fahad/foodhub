import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import useAddressList from '../../../Hooks/useAddressList';
import useApi from '../../../Hooks/useApi';
import "./UserAddressList.css"

const UserAddressList = ({ activeAddress }) => {
    const user = JSON.parse(localStorage.getItem("user"))


    const [show, setShow] = useState(false);


    const { handleDeleteAddress, addressArray, handleEdit, handleActiveOrders } = useAddressList()

    const handleClose = () => {
        setShow(false);
    }
    const handleShow = (e) => {
        e.preventDefault()
        setShow(true);
    }





    return (
        <>
            <div className='UserAddressList'>
                <div className='UserAddressList_checkAddress'>

                    <div class="form-check">
                        <input className="form-check-input" type="checkbox" name="flexRadioDefault" checked />

                        <label className="form-check-label ps-3 fw-bold" >
                            {
                                activeAddress?.address_type_note
                            }
                        </label>
                        <br />
                        <label className="form-check-label ps-3" htmlFor="flexRadioDefault1">
                            {
                                activeAddress?.address
                            }
                        </label>
                        <br />
                        <label className="form-check-label ps-3" htmlFor="flexRadioDefault1">
                            note to rider: {activeAddress?.note}
                        </label>
                    </div>
                </div>
                <div className='UserAddressList_action'>
                    <button onClick={handleEdit}><i class="fas fa-pen"></i></button>
                    <button onClick={handleDeleteAddress}><i class="fas fa-trash-alt"></i></button>
                </div>
            </div>

            <button className='UserAddressList_view_btn' onClick={handleShow}>VIEW SAVE ADDRESS</button>


            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        addressArray.map((pd, index) =>
                            <div class="form-check mb-3">
                                <input
                                    className="form-check-input" type="radio" name="flexRadioDefault" id={`${pd?.map_latitude}`}
                                    onClick={() => handleActiveOrders(pd?.id)}
                                    defaultChecked={pd?.status === 1 ? true : false}
                                />

                                <label className="form-check-label ps-3 fw-bold" htmlFor={`${pd?.map_latitude}`} onClick={() => handleActiveOrders(pd?.id)} >
                                    {pd?.address_type_note}
                                </label>
                                <br />
                                <label className="form-check-label ps-3" htmlFor="flexRadioDefault1">
                                    {pd?.appartment_no}, {pd?.address}
                                </label>
                                <br />
                                <label className="form-check-label ps-3" htmlFor="flexRadioDefault1">
                                    note to rider: {pd?.note}
                                </label>
                            </div>
                        )
                    }

                </Modal.Body>
            </Modal>
        </>
    );
};

export default UserAddressList;