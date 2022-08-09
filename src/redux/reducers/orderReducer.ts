export const orderReducer = (state = [], action: any) => {
  switch (action.type) {
    case "ADD_ALL_ORDERS":
      return action.payload;

    case "UPDATE_ORDER_STATUS":
      return state;

    default:
      return state;
  }
};
