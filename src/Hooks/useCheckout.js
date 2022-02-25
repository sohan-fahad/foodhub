import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import useAuthentication from "../Hooks/useAuthentication"

const useCheckout = () => {

    const [address, setAddress] = useState(true);

    const { reset } = useForm();
    const { control, setControl } = useAuthentication()


    let prevArray = JSON.parse(localStorage.getItem("userAddress"))
    let addressArray = []

    if (prevArray) {
        prevArray.forEach(element => {
            addressArray.push(element)
        });
    }

    // This function for adding address
    const addAddress = data => {
        data.location = "4 road, Banasree, Rampura"
        data.active = 1
        if (prevArray) {
            for (let i = 0; i < addressArray.length; i++) {
                addressArray[i].active = 2
            }
            addressArray.push(data)
            localStorage.setItem("userAddress", JSON.stringify(addressArray))
        }
        else {
            const newArray = new Array(data)
            localStorage.setItem("userAddress", JSON.stringify(newArray))
        }
        setControl(!control)
    }




    return {
        addAddress,
    }
};

export default useCheckout;