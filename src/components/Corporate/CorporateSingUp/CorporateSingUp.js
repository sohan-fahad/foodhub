import React, { useState } from 'react';
import "./CorporateSingUp.css"

const CorporateSingUp = () => {
    return (
        <div className='CorporateSingUp' id='CorporateSingUp'>
            <div className="container">
                <div className="CorporateSingUp_overlay"></div>

                <h1>Get in touch with our dedicated support today!</h1>
                <p>Let your employees focus on what's important. We'll take care of the food they love. <br />
                    Try our easy, flexible corporate food delivery service today.</p>

                <div className="CorporateSingUp_form_wrapper">
                    <form>
                        <h3>Company name</h3>
                        <input type="text" placeholder='Company name' />
                        <select>
                            <option value="" disabled selected>Industry</option>
                            <option value="Consulting Firm">Consulting Firm</option>
                            <option value="Consulting Firm">Education, Govt. & Non-Profit</option>
                        </select>
                        <select>
                            <option value="" disabled selected>No. of employees</option>
                            <option value="1-50">1-50</option>
                            <option value="51-100">51-100</option>
                        </select>
                        <input type="text" placeholder='Street name' />
                        <div className='d-flex'>
                            <input type="text" placeholder='Postal code' />
                            <select className='border-start-0'>
                                <option value="" disabled selected>Area</option>
                                <option value="Uttara">Uttara</option>
                                <option value="Dhanmandi">Dhanmandi</option>
                            </select>
                        </div>
                        <h3 className='mt-5'>Your details</h3>
                        <input type="text" placeholder='First name' />
                        <input type="text" placeholder='Last name' />
                        <input type="email" placeholder='Email' />
                        <input type="number" placeholder='Mobile number' />
                        <select>
                            <option value="" disabled selected>Reason for choosing us</option>
                            <option value="Allowance">Allowance</option>
                            <option value="Teamlunch/Meeting">Teamlunch/Meeting</option>
                        </select>
                        <button type='submit'>SING UP</button>
                    </form>
                </div>

                <div className="CorporateSingUp_contact">
                    <div>
                        <h4>Want to become a corporate client?</h4>
                        <p>Contact - <span className='brand_color'>corporate.sales@foodpanda.bd</span></p>
                    </div>
                    <div className='mt-5'>
                        <h4>Have a question regarding your order?</h4>
                        <p>Contact - <span className='brand_color'>corporate@foodpanda.bd</span></p>
                    </div>
                    <div className='mt-5'>
                        <h4>Want to list your restaurant on foodpanda? Become a partner</h4>
                        <p className='brand_color'>restaurant.foodpanda.com.bd</p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default CorporateSingUp;