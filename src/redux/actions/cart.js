import * as types from '../actionTypes';

export const addItemToCart = (item) => ({
  type: types.ADD_ITEM_TO_CART,
  item,
});

export const incrementCartItemQuantity = (item, quantity) => ({
  type: types.INCREMENT_CART_ITEM_QUANTITY,
  item,
  quantity,
});

export const decrementCartItemQuantity = (item) => ({
  type: types.DECREMENT_CART_ITEM_QUANTITY,
  item,
});

export const removeItemFromCart = (item) => ({
  type: types.REMOVE_ITEM_FROM_CART,
  item,
});

export const migrateCartItems = () => ({
  type: types.MIGRATE_CART_ITEMS,
});

export const updateCartTotal = (amount) => ({
  type: types.UPDATE_CART_TOTAL,
  amount,
});

export const clearCartItems = () => ({
  type: types.CLEAR_CART_ITEMS,
});
