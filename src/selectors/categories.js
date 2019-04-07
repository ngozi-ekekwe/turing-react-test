import { createSelectorCreator } from 'reselect';
import memoize from 'lodash/memoize';

const hashFn = (...args) => args.reduce(
  (acc, val) => `${acc}-${JSON.stringify(val)}`,
  '',
);

const customSelectorCreator = createSelectorCreator(memoize, hashFn);

const getCategories = (state, props) => state.category.categories
const getCurrentDepartment = (state, props) => state.department.departmentId


export const getAllCategories = customSelectorCreator(
  [getCategories],
  (categories, departmentId) => {
    if (departmentId) {
      return categories.rows.filter((category) => category.department_id === departmentId
      )
    }
    return categories.rows
  },
);


