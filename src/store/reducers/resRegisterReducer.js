const initialState = {};

const resRegisterReducer = (state = initialState, action) => {
  if (action.type === "Restaurant_Register") {
    console.log(action.payload);
    return (state = action.payload);
  } else {
    return (state = {});
  }
};

export default resRegisterReducer;
