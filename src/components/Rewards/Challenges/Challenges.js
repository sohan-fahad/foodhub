import React from 'react';
import { useNavigate } from 'react-router';
import "./Challenges.css"

const Challenges = ({ challenges }) => {
    const { dayLeft, points, title, offer, id } = challenges
    const navigate = useNavigate()
    return (
        <div className='col-lg-3 col-sm-6 col-12'>
            <div className="challenge_Card" onClick={() => navigate(`/rewards/challenges/${id}`)}>
                <img src={offer} alt='' />
                <h5>{title}</h5>
                <div className='row'>
                    <div className="col-4">
                        <hr />
                    </div>
                    <div className="col-4">
                        <hr />
                    </div>
                    <div className="col-4">
                        <hr />
                    </div>
                </div>
                <div className='d-flex justify-content-between'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" role="img">
                            <g fill="none" fill-rule="evenodd">
                                <path fill="rgb(112 112 112)" fill-rule="nonzero" d="M12,2 C17.5228475,2 22,6.4771525 22,12 C22,17.5228475 17.5228475,22 12,22 C6.4771525,22 2,17.5228475 2,12 C2,6.4771525 6.4771525,2 12,2 Z M12,4 C7.581722,4 4,7.581722 4,12 C4,16.418278 7.581722,20 12,20 C16.418278,20 20,16.418278 20,12 C20,7.581722 16.418278,4 12,4 Z"></path>
                                <path fill="rgb(112 112 112)" fill-rule="nonzero" d="M12.1106414,6.34070385 C12.1599446,6.36503641 12.1998515,6.40494329 12.224184,6.45424644 L13.7633558,9.57294902 L17.2050484,10.0730562 C17.3416846,10.0929106 17.436355,10.2197713 17.4165006,10.3564076 C17.4085944,10.4108168 17.3829726,10.4611024 17.3436017,10.4994796 L14.8531695,12.927051 L15.4410808,16.3548368 C15.4644211,16.4909209 15.3730241,16.6201599 15.23694,16.6435002 C15.1827506,16.6527944 15.1270086,16.6439657 15.0783435,16.6183809 L12.1163353,15.0611611 C12.0435043,15.0228716 11.9564957,15.0228716 11.8836647,15.0611611 L8.92165652,16.6183809 C8.79944538,16.6826311 8.64828859,16.6356445 8.58403839,16.5134334 C8.55845362,16.4647682 8.54962495,16.4090262 8.55891916,16.3548368 L9.14683045,12.927051 L6.65639826,10.4994796 C6.55752737,10.4031043 6.55550429,10.244826 6.6518796,10.1459551 C6.69025675,10.1065842 6.74054235,10.0809624 6.79495161,10.0730562 L10.2366442,9.57294902 L11.775816,6.45424644 C11.8369216,6.33043302 11.986828,6.27959827 12.1106414,6.34070385 Z"></path>
                            </g>
                        </svg>
                        <span className='ms-1'>{points}</span>
                    </div>
                    <i class="far fa-clock"> <span> {dayLeft}</span></i>
                </div>
            </div>
        </div>
    );
};

export default Challenges;