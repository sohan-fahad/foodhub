import React from 'react';
import CorporateBenefits from '../CorporateBenifits/CorporateBenefits';
import CorporateSingUp from '../CorporateSingUp/CorporateSingUp';
import CorporateHero from '../CorporateHero/CorporateHero';
import CorporateReviews from '../CorporateReviews/CorporateReviews';
import CorporateTeam from '../CorporateTeam/CorporateTeam';
import CorporateVisibility from '../CorporateVisibility/CorporateVisibility';
import CorporateFaq from '../CorporateFaq/CorporateFaq';

const Corporate = () => {
    return (
        <div className='Corporate'>
            <CorporateHero></CorporateHero>
            <CorporateTeam></CorporateTeam>
            <CorporateVisibility></CorporateVisibility>
            <CorporateBenefits></CorporateBenefits>
            <CorporateReviews></CorporateReviews>
            <CorporateFaq></CorporateFaq>
            <CorporateSingUp></CorporateSingUp>
        </div>
    );
};

export default Corporate;