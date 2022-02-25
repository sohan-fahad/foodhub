import React from 'react';
import "./RiderMap.css"

const RiderMap = () => {
    const iframe = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d116834.13669278496!2d90.41932570000002!3d23.780636500000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b58a4603122d%3A0x16bdcafa89870331!2z4KaH4KaJ4KaP4Ka4LeCmrOCmvuCmguCmsuCmviDgpq7gp4fgpqHgpr_gppXgp4fgprIg4KaV4Kay4KeH4KacIOCmj-CmqOCnjeCmoSDgprngprjgpqrgpr_gpp_gpr7gprI!5e0!3m2!1sbn!2sbd!4v1645504587746!5m2!1sbn!2sbd"

    return (
        <div className='RiderMap'>
            <iframe src={iframe}></iframe>
        </div>
    );
};

export default RiderMap;