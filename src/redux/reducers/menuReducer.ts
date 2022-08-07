export const menuReducer = (state = [], action: any) => {
  switch (action.type) {
    case "GET_ALL_PRODUCTS":
      return action.payload;

    case "ADD_PRODUCT":
      return [...state, action.payload];
    default:
      return state;
  }
};
