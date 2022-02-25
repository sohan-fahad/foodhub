const location = (latitude, longitude) => {
    return {
        type: "USER_LOCATION",
        latitude,
        longitude
    }
};

export default location;