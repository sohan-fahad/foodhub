import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAddressList from '../../../Hooks/useAddressList';
import useApi from '../../../Hooks/useApi';
import useCheckout from '../../../Hooks/useCheckout';

const UserAddressDetail = ({ handleAddress }) => {

    const iframe =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.5754211830317!2d90.43406231425469!3d23.76251539423196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b809fd8d4487%3A0x7c9b3001d76ccc77!2sFarazy%20Hospital%20Ltd.!5e0!3m2!1sen!2snl!4v1642416797117!5m2!1sen!2snl";


    const { register, handleSubmit, reset } = useForm();

    const { addressTypeInfo, handleShow, handleAddressType, addressType } = useAddressList()





    return (
        <>
            <form onSubmit={handleSubmit(handleAddress)}>
                <div className="DeliveryDetails_address_map">
                    <iframe src={iframe} style={{ width: "100%" }} disable></iframe>
                    <div className="DeliveryDetails_address_info">
                        <div>
                            <label {...register("address")}>602 Mogbazar Municipal Market Rd</label>
                            <p>Dhaka</p>
                        </div>
                        <button onClick={handleShow}>Edit</button>
                    </div>
                </div>
                <div>

                </div>
                <div className="DeliveryDetails_additional_info">
                    <input type="text" placeholder="Apartment #" {...register("appartment_no")} required />
                    <textarea
                        {...register("note")}
                        placeholder="Note to rider - e.g floor/direction/landmark"
                        required
                    ></textarea>
                </div>
                <h5 className="mt-3">Add labels</h5>
                <div className="DeliveryDetails_labels">
                    {
                        addressTypeInfo.map(pd =>
                            <div
                                className="DeliveryDetails_label"
                                onClick={() => handleAddressType(`${pd.name}`)}
                                key={pd?.id}
                            >
                                <input
                                    type="radio"
                                    id={`${pd?.name}`}
                                    value={`${pd?.order_position}`}
                                    name="custom-radio-btn"
                                    {...register("address_type")}
                                />

                                <label htmlFor={`${pd?.name}`}>
                                    <i className={`${pd?.address_type_icon}`}></i>
                                </label>

                                <p>{pd?.name}</p>
                            </div>
                        )
                    }
                </div>
                {
                    addressType === "Others" &&
                    <div className="DeliveryDetails_label_others">
                        <input type="text" placeholder="Custom" {...register("address_type_note")} required />
                    </div>
                }
                <input
                    className="DeliveryDetails_submit"
                    type="submit"
                    value="SUBMIT"
                />
            </form>
        </>
    );
};

export default UserAddressDetail;