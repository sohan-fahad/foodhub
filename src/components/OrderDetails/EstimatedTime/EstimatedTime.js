import React from 'react';
import logo from "../../../images/logo01.jpg"

const EstimatedTime = ({ status }) => {
    return (
        <div>
            <div className="ProcessStatus_estimate">
                <h3>Estimated Delivery Time</h3>
                <h1>15 - 20 min</h1>
                <div className="row mt-3">
                    <div className="col-2 ProcessStatus_progress">
                        <div className='active_ProcessStatus'></div>
                    </div>
                    <div className="col-4 ProcessStatus_progress">
                        <div></div>
                    </div>
                    <div className="col-3 ProcessStatus_progress">
                        <div></div>
                    </div>
                    <div className="col-3 ProcessStatus_progress">
                        <div></div>
                    </div>
                </div>
                <p>{status ? status : "..."}</p>
            </div>
            <div className="ProcessStatus_riderContact">
                <div className="row gy-3">
                    <div className="col-lg-3 col-sm-3 col-12">
                        <img src={logo} className="w-75 img-fluid" />
                    </div>
                    <div className="col-lg-7 col-sm-7 col-12 d-flex justify-content-center flex-column">
                        <h5 className='first_title fw-bold'>Rider Contact</h5>
                        <p className='second_title m-0'>Ask your rider to deliver contactless</p>
                    </div>
                    <div className="col-lg-2 col-sm-2 col-12 d-flex justify-content-center flex-column">
                        <i class="fas fa-comment-alt fs-1 text-center"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EstimatedTime;