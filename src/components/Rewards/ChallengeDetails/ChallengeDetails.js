import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import "./ChallengeDetails.css"

const ChallengeDetails = () => {
    const challengesList = [
        {
            "id": 1,
            "title": "Weekend goals smashed in 4x weekend orders",
            "bgImg": "https://images.deliveryhero.io/image/fp-loyalty/app/web/fp/challenge-item-bg.png",
            "offer": "https://images.deliveryhero.io/image/fp-loyalty/marketing/BD/CW34-36/badges-weekends-active@2x.png",
            "points": 24,
            "dayLeft": 14,
            "ordersTask": 4,
            "complateTask": 2,
            "conditions": [
                "Users must place orders within the stated time frame. Pre-orders delivered outside of the stated time frame are not valid orders and will not count towards the challenge.",
                "Users will earn badges and points when the order has been delivered, and not at the point of placing the order.",
                "The order must be successfully delivered. User will not earn badges or points for any orders which have either been cancelled or refunded (in part or in full).",
                "Users may view their earned badges under Badges. Points earned may be used to exchange for rewards under Rewards shop."
            ],
            "spendTaks": 3654
        },
        {
            "id": 2,
            "title": "Weekend goals smashed in 4x weekend orders",
            "bgImg": "https://images.deliveryhero.io/image/fp-loyalty/app/web/fp/challenge-item-bg.png",
            "offer": "https://images.deliveryhero.io/image/fp-loyalty/marketing/BD/CW34-36/badges-weekends-active@2x.png",
            "points": 24,
            "dayLeft": 14,
            "ordersTask": 4,
            "complateTask": 2,
            "conditions": [
                "Users must place orders within the stated time frame. Pre-orders delivered outside of the stated time frame are not valid orders and will not count towards the challenge.",
                "Users will earn badges and points when the order has been delivered, and not at the point of placing the order.",
                "The order must be successfully delivered. User will not earn badges or points for any orders which have either been cancelled or refunded (in part or in full).",
                "Users may view their earned badges under Badges. Points earned may be used to exchange for rewards under Rewards shop."
            ],
            "spendTaks": 3654
        },
        {
            "id": 3,
            "title": "Weekend goals smashed in 4x weekend orders",
            "bgImg": "https://images.deliveryhero.io/image/fp-loyalty/app/web/fp/challenge-item-bg.png",
            "offer": "https://images.deliveryhero.io/image/fp-loyalty/marketing/BD/CW34-36/badges-weekends-active@2x.png",
            "points": 24,
            "dayLeft": 14,
            "ordersTask": 4,
            "complateTask": 2,
            "conditions": [
                "Users must place orders within the stated time frame. Pre-orders delivered outside of the stated time frame are not valid orders and will not count towards the challenge.",
                "Users will earn badges and points when the order has been delivered, and not at the point of placing the order.",
                "The order must be successfully delivered. User will not earn badges or points for any orders which have either been cancelled or refunded (in part or in full).",
                "Users may view their earned badges under Badges. Points earned may be used to exchange for rewards under Rewards shop."
            ],
            "spendTaks": 3654
        },
        {
            "id": 4,
            "title": "Weekend goals smashed in 4x weekend orders",
            "bgImg": "https://images.deliveryhero.io/image/fp-loyalty/app/web/fp/challenge-item-bg.png",
            "offer": "https://images.deliveryhero.io/image/fp-loyalty/marketing/BD/CW34-36/badges-weekends-active@2x.png",
            "points": 24,
            "dayLeft": 14,
            "ordersTask": 4,
            "complateTask": 2,
            "conditions": [
                "Users must place orders within the stated time frame. Pre-orders delivered outside of the stated time frame are not valid orders and will not count towards the challenge.",
                "Users will earn badges and points when the order has been delivered, and not at the point of placing the order.",
                "The order must be successfully delivered. User will not earn badges or points for any orders which have either been cancelled or refunded (in part or in full).",
                "Users may view their earned badges under Badges. Points earned may be used to exchange for rewards under Rewards shop."
            ],
            "spendTaks": 3654
        },
        {
            "id": 5,
            "title": "Weekend goals smashed in 4x weekend orders",
            "bgImg": "https://images.deliveryhero.io/image/fp-loyalty/app/web/fp/challenge-item-bg.png",
            "offer": "https://images.deliveryhero.io/image/fp-loyalty/marketing/BD/CW34-36/badges-weekends-active@2x.png",
            "points": 24,
            "dayLeft": 14,
            "ordersTask": 4,
            "complateTask": 2,
            "conditions": [
                "Users must place orders within the stated time frame. Pre-orders delivered outside of the stated time frame are not valid orders and will not count towards the challenge.",
                "Users will earn badges and points when the order has been delivered, and not at the point of placing the order.",
                "The order must be successfully delivered. User will not earn badges or points for any orders which have either been cancelled or refunded (in part or in full).",
                "Users may view their earned badges under Badges. Points earned may be used to exchange for rewards under Rewards shop."
            ],
            "spendTaks": 3654
        },

    ]


    const [terms, setTerms] = useState(true)
    const navigate = useNavigate()

    const handleTerms = () => {
        if (terms) {
            setTerms(false)
        }
        else {
            setTerms(true)
        }
    }

    const { id } = useParams()
    const challenge = challengesList.find(pd => pd?.id == id);
    const { title, offer, ordersTask, dayLeft, points, spendTaks, complateTask, conditions } = challenge;
    return (
        <div className='ChallengeDetails'>
            <div className="container">
                <div className="row justify-content-lg-center">
                    <div className="col-lg-8 col-12">
                        <div className="ChallengeDetails_header">
                            <div className="ChallengeDetails_header_bg">
                                <img src={offer} alt="" />
                            </div>

                            <div className="ChallengeDetails_header_content">
                                <h1>{title}</h1>
                                <div className='d-flex justify-content-center'>
                                    <p>
                                        <i className="fas fa-concierge-bell"></i>
                                        <span className='ms-2'> {complateTask}/{ordersTask}</span>
                                    </p>
                                    <p>
                                        <i className="far fa-clock ms-3"></i> {dayLeft} days left
                                    </p>
                                </div>
                                <div className="row">
                                    <div className="col-4"><hr /></div>
                                    <div className="col-4"><hr /></div>
                                    <div className="col-4"><hr /></div>
                                </div>
                                <h2>Collect</h2>
                                <p className='second_title'><i className="fas fa-award me-2"></i> {points} point</p>
                                <p className='m-0 second_title'><i className="fas fa-award me-2"></i> hungry for the weekend</p>
                            </div>
                        </div>
                        <div className="ChallengeDetails_terms">
                            <div className='ChallengeDetails_terms_wrapper'>
                                <h2>More about this challenge</h2>
                                <ul>
                                    <li> Place 3x lunch orders from 11am-2pm.</li>
                                    <li> Shop and pick up orders are not eligible.</li>
                                </ul>

                                <div className='ChallengeDetails_terms_conditions'>
                                    <button onClick={handleTerms}>Terms & conditions {!terms ? <i className="fas fa-chevron-down"></i> : <i className="fas fa-chevron-up"></i>}</button>
                                    {terms && <ul>
                                        {
                                            conditions.map(pd => <li className='mt-2'>{pd}</li>)
                                        }
                                    </ul>
                                    }
                                </div>
                            </div>
                            <div className='ChallengeDetails_terms_btn'>
                                <button onClick={() => navigate(-1)}>GO TO ALL CHALLENGE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChallengeDetails;