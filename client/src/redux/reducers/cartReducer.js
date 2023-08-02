import * as actionType from "../constants/cartConstant";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case actionType.ADD_TO_CART:
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (product) => product.id === newItem.id
      );

      if (existingItem) {
        // Update the quantity of the existing item
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === existingItem.id
              ? //  ? { ...item, quantity: item.quantity + newItem.quantity }
                newItem
              : item
          ),
        };
      } else {
        // Add the new item to the cart
        return { ...state, cartItems: [...state.cartItems, newItem] };
      }

    case actionType.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (product) => product.id !== action.payload
        ),
      };

    case actionType.REDUCE_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload
            ? {
                ...item,
                quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity,
              }
            : item
        ),
      };
    // return state;

    case actionType.INCREASE_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    default:
      return state;
  }
};
