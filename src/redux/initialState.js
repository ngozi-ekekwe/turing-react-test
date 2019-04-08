export default {
  department: {
    departments: [],
    departmentId: null,
    error: null
  },
  category: {
    categories: [],
    error: null
  },
  product: {
    products: [],
    error: null,
    page: 1,
    searchResults: [],
    category: null,
  },
  customer: {
    customer: {},
    error: null
  },
  auth: {
    isAuthenticated: null
  },
  attribute: {
    attribute: [],
    error: null
  },
  cart: {
    cartItems: [],
    cartTotal: 0,
    previousCartItems: null,
    toggleCartWidget: false,
    cart_id: null
  },

  order: {
    orders: []
  },
  regions: {
    shipping_regions: [],
    error: [],
    shipping: [],
    shipping_region_id: null,
    shipping_id: null
  }
}