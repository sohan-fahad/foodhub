import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useApi from './useApi';
import useAuthentication from './useAuthentication';

const useAddressList = () => {

    const [show, setShow] = useState(false);
    const [address, setAddress] = useState(false);
    const [addressEdit, setAddressEdit] = useState(false);
    const [addressArray, setAddressArray] = useState([]);
    const [activeAddress, setActiveAddress] = useState({});
    const [addressTypeInfo, setAddressTypeInfo] = useState([])
    const [addressType, setAddressType] = useState("")

    const { control, setControl } = useAuthentication()


    const { foodHubAPI } = useApi()
    const { reset } = useForm();

    const user = JSON.parse(localStorage.getItem("user"))

    useEffect(() => {
        reset(addressTypeInfo)
        const user = JSON.parse(localStorage.getItem("user"))
        if (user) {
            fetch(`${foodHubAPI}/user/addressetypes`, {
                headers: {
                    "x-access-token": `${user?.accessToken}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setAddressTypeInfo(data?.payload)
                })
        }
    }, [!addressTypeInfo])


    useEffect(() => {
        fetch(`${foodHubAPI}/user/addresses`, {
            headers: {
                "x-access-token": `${user?.accessToken}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.statusCode === 200) {
                    setAddressArray(data?.payload)
                    const deliveryAddress = data?.payload.find(pd => pd?.status === 1)
                    if (deliveryAddress) {
                        setActiveAddress(deliveryAddress)
                        setAddress(true)
                        localStorage.setItem("deliveryAddress", JSON.stringify(deliveryAddress))
                    }
                    else {
                        setAddress(false)
                    }
                }
            })
    }, [!addressArray, !control])


    const handleClose = () => {
        setShow(false);
    };

    const handleShow = (e) => {
        e.preventDefault();
        setShow(true);
    };

    // this function for show address list
    const handleAddress = (e) => {
        e.preventDefault()
        setAddress(false)
    }

    // this function for cancel address
    const cancelAddress = (e) => {
        e.preventDefault()
        setAddress(true)
    }

    const handleAddressType = (state) => {
        localStorage.setItem("userAddressType", state)
    }

    // this function will add an user address
    const addAddress = (data) => {
        const userLocation = JSON.parse(localStorage.getItem("location"))

        data.address = "Mirpur, Dhaka"
        // data.map_longitude = userLocation.longitude.toString()
        // data.map_latitude = userLocation.latitude.toString()
        data.map_longitude = Math.random().toString()
        data.map_latitude = Math.random().toString()
        data.customer_id = user?.id
        data.address_type = parseInt(data.address_type)

        if (!data.address_type_note) {
            const userAddressType = localStorage.getItem("userAddressType")
            data.address_type_note = userAddressType
        }
        if (user) {
            fetch(`${foodHubAPI}/user/addresses`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    "x-access-token": `${user?.accessToken}`,
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => {
                    setAddress(true)
                    setControl(!control)
                    localStorage.removeItem("userAddressType")
                })
        }
    }

    // this function will delete all address
    const handleDeleteAddress = () => {
        fetch(`${foodHubAPI}/user/addresses?id=${activeAddress?.id}`, {
            method: "delete",
            headers: {
                "x-access-token": `${user?.accessToken}`,
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAddress(false)
                setControl(!control)
            })
    }

    // this function for edit address

    const handleEdit = () => {
        setAddress(false)
        console.log(address);
    }

    const handleActiveOrders = (id) => {
        const status = { status: 1 }
        let data = new URLSearchParams(status);
        fetch(`${foodHubAPI}/user/addresses/status?id=${id}`, {
            method: "Put",
            headers: {
                "x-access-token": `${user?.accessToken}`
            },
            body: data
        })
            .then(res => res.json())
            .then(data => {
                // setActiveAddress(data?.payload)
                setControl(!control)
                setAddress(true)
            })
    }

    // const handleUnactive = () => {
    //     fetch(`${foodHubAPI}/user/addresses`, {
    //         headers: {
    //             "x-access-token": `${user?.accessToken}`,
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data?.statusCode) {
    //                 data?.payload.forEach(element => {
    //                     const updateData = {
    //                         ...element, status: 0

    //                     }
    //                     fetch(`${foodHubAPI}/user/addresses?id=${element?.id}`, {
    //                         method: "PUT",
    //                         headers: {
    //                             "x-access-token": `${user?.accessToken}`,
    //                         },
    //                         body: JSON.stringify(updateData)
    //                     })
    //                         .then(res => res.json())
    //                         .then(data => console.log(data))
    //                 });
    //             }
    //         })
    // }


    return {
        address,
        addressArray,
        handleAddress,
        cancelAddress,
        activeAddress,
        handleShow,
        handleClose,
        show,
        handleDeleteAddress,
        addAddress,
        addressTypeInfo,
        addressType,
        handleAddressType,
        handleEdit,
        addressEdit,
        handleActiveOrders
    }
};

export default useAddressList;