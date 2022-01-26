import React from 'react';
import "./CorporateTeam.css"

const CorporateTeam = () => {
    return (
        <div className='CorporateTeam'>
            <div className="container">
                <h1>FoodHub for your teams</h1>
                <p>Drive your business forward by keeping your employees happy and fed – within budget. <br /> We've got it all covered at the best prices.</p>


                <div className="row g-4">
                    <div className="col-lg-4 col-sm-6 col-12">
                        <div className="CorporateTeam_card">
                            <h3>Best value</h3>
                            <p>Slash 10% off the price of those big orders with our exclusive discount for corporate customers.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-12">
                        <div className="CorporateTeam_card">
                            <h3>Dedicated account manager</h3>
                            <p>Get the personal touch. Throw your dedicated AM any tech related challenges – or hit them up for hot restaurant tips.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-12">
                        <div className="CorporateTeam_card">
                            <h3>1 place for complete control</h3>
                            <p>From individual allowances to e-gift vouchers to catering and ordering pantry supplies, it’s all here.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CorporateTeam;