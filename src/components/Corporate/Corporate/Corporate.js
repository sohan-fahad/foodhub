import React from 'react';
import CorporateBenefits from '../CorporateBenifits/CorporateBenefits';
import CorporateHero from '../CorporateHero/CorporateHero';
import CorporateTeam from '../CorporateTeam/CorporateTeam';
import CorporateVisibility from '../CorporateVisibility/CorporateVisibility';

const Corporate = () => {
    return (
        <div className='Corporate'>
            <CorporateHero></CorporateHero>
            <CorporateTeam></CorporateTeam>
            <CorporateVisibility></CorporateVisibility>
            <CorporateBenefits></CorporateBenefits>
        </div>
    );
};

export default Corporate;