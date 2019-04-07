import { createSelectorCreator } from 'reselect';
import memoize from 'lodash/memoize';

const hashFn = (...args) => args.reduce(
  (acc, val) => `${acc}-${JSON.stringify(val)}`,
  '',
);

const customSelectorCreator = createSelectorCreator(memoize, hashFn);

const getProducts = (state, props) => state.product.products;
const getCurrentDepartment = (state, props) => state.department.departmentId;

export const getAllProducts = customSelectorCreator(
  [getProducts],
  (products) => {
    return products
  },
);

export const getRegionalProducts = customSelectorCreator(
  [getProducts, 'regional']
)


