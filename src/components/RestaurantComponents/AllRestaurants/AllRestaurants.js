import React, { useEffect, useState } from 'react';
import useApi from '../../../Hooks/useApi';
import Restaurant from '../Restaurant/Restaurant';
import "./AllRestaurants.css"

const AllRestaurants = () => {

    const { foodHubAPI } = useApi()

    const [restaurants, setRestaurants] = useState([])

    useEffect(() => {
        fetch(`${foodHubAPI}/user/restaurants`)
            .then(res => res.json())
            .then(data => { setRestaurants(data.payload); })
    }, [])

    return (
        <div className='AllRestaurants'>
            <div className="container">
                <h3>ALL RESTAURANT</h3>
                <div className="row g-4">
                    {
                        restaurants.map(pd => <Restaurant key={pd?.id} restaurant={pd} />
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default AllRestaurants;