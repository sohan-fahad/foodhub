import React, { useState } from 'react';
import Challenges from '../Challenges/Challenges';
import "./Rewards.css"

const Rewards = () => {

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

    const [rewards, setRewards] = useState("challenges")
    return (
        <div className='Rewards'>

            <div className='challengeBtn_container'>
                <div className="challengeBtn_wrapper">
                    <button className={rewards === "challenges" && 'isChallengeBtn_active'} onClick={() => setRewards("challenges")}>CHALLENGES</button>

                    <button className={rewards === "badges" && 'isChallengeBtn_active'} onClick={() => setRewards("badges")}>BADGES</button>


                    <button className={rewards === "rewardShops" && 'isChallengeBtn_active'} onClick={() => setRewards("rewardShops")}>REWARDS SHOP</button>
                </div>
            </div>

            <div className="container">

                <div className='challenge_container'>
                    <div className="row g-5">
                        {
                            challengesList.map(pd => <Challenges key={pd?.id} challenges={pd} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rewards;