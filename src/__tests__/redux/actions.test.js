import * as types from '../../redux/actionTypes';
import { addItemToCart } from '../../redux/actions/cart';
import { getProductAttributeSuccess } from '../../redux/actions/attributes';
import { getAllCategoriesSuccess } from '../../redux/actions/categories';

describe('Cart Action', () => {
  it('should dispatch ADD_ITEM_TO_CART', () => {
    const action = addItemToCart('item');
    expect(action.type).toEqual(types.ADD_ITEM_TO_CART);
    expect(action.item).toEqual('item');
  })
})

describe('Attributes Actions', () => {
  it('should dispatch GET_PRODUCT_ATTRIBUTES_SUCCESS', () => {
    const action = getProductAttributeSuccess([{}]);
    expect(action.type).toEqual(types.GET_PRODUCT_ATTRIBUTES_SUCCESS);
  })
})

describe('Categories Actions', () => {
  it('should dispatch GET_ALL_CATEGORIES_SUCCESS', () => {
    const action = getAllCategoriesSuccess([{}]);
    expect(action.type).toEqual(types.GET_ALL_CATEGORIES_SUCCESS);
  })
})

