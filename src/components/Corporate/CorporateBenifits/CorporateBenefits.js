import React from 'react';
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
                                <li>
                                    <div className='CorporateBenefits_list'>
                                        <div className='me-3'></div>
                                        <p className='m-0'>Improve employee satisfaction and retention</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='CorporateBenefits_list'>
                                        <div className='me-3'></div>
                                        <p className='m-0'>Encourage cohesion and cooperation</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='CorporateBenefits_list'>
                                        <div className='me-3'></div>
                                        <p className='m-0'>Increase team productivity and morale</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='CorporateBenefits_list'>
                                        <div className='me-3'></div>
                                        <p className='m-0'>Access to exclusive corporate menus and discounts</p>
                                    </div>
                                </li>
                            </ul>
                            <button>FIND OUT MORE</button>
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