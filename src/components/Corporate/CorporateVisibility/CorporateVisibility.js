import React from 'react';
import "./CorporateVisibility.css"
import visibilityImg from "../../../images/corporatevisibility.jpg"

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
                                <li>
                                    <div className='CorporateVisibility_list'>
                                        <div className='me-3'></div>
                                        <p className='m-0'>Set allowance limits based on day, time, location, service</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='CorporateVisibility_list'>
                                        <div className='me-3'></div>
                                        <p className='m-0'>Easy employee management, onboarding, and compliance</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='CorporateVisibility_list'>
                                        <div className='me-3'></div>
                                        <p className='m-0'>Streamlined monthly or bi-monthly invoicing</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='CorporateVisibility_list'>
                                        <div className='me-3'></div>
                                        <p className='m-0'>Pre-orders up to 14 days in advance</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='CorporateVisibility_list'>
                                        <div className='me-3'></div>
                                        <p className='m-0 text-start'>Dedicated account manager</p>
                                    </div>
                                </li>
                            </ul>
                            <button>FIND OUT MORE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CorporateVisibility;