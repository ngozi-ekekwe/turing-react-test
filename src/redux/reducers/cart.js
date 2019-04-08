import * as types from '../actionTypes';
import initialState from '../initialState';
// import { updateQuantity } from '../../helpers/checkout';

const updateQuantity = (ary, pred, val, operation, itemQuantity = 1) => {
  const chosenItem = ary.find((item) => pred(val, item)) || null;
  return chosenItem
    ? ary.map((item) => (pred(val, item)
      ? ({
        ...chosenItem,
        quantity: operation === 'add' ? chosenItem.quantity + itemQuantity : chosenItem.quantity - 1,
      }) : item))
    : [...ary, { ...val, quantity: 1 }];
};


// TODO: Check when last data was stored and force invalidations
export default function cartReducer(state = initialState.cart, action) {
  const handleQuantityUpdate = (operation) => updateQuantity(
    state.cartItems, (obj, val) => obj.id === val.id, action.item, operation, action.quantity,
  );

  const handleRemoveItem = (item) => {
    return (state.cartItems.filter((obj) => {
      return obj.id !== item.id
    }));
  
  }
  switch (action.type) {
    case types.ADD_ITEM_TO_CART: {
      return { ...state, cartItems: [...state.cartItems, action.item], previousCartItems: null };
    }
    case types.INCREMENT_CART_ITEM_QUANTITY: {
      return { ...state, cartItems: handleQuantityUpdate('add'), previousCartItems: null };
    }
    case types.REMOVE_ITEM_FROM_CART: {
      return { ...state, cartItems: handleRemoveItem(action.item) };
    }
    case types.DECREMENT_CART_ITEM_QUANTITY: {
      return { ...state, cartItems: action.item.quantity === 1 ? handleRemoveItem(action.item) : handleQuantityUpdate('remove'), previousCartItems: null };
    }
    case types.UPDATE_CART_TOTAL: {
      return { ...state, cartTotal: action.amount };
    }
    case types.MIGRATE_CART_ITEMS: {
      const { cartItems } = state;
      return { ...state, ...initialState.cart, previousCartItems: cartItems };
    }
    case types.CLEAR_CART_ITEMS: {
      return { ...state, ...initialState.cart };
    }
    case types.SAVE_UNIQUE_CART_ID: {
      return {...state, cart_id: action.id}
    }
    default: {
      return state;
    }
  }
}
