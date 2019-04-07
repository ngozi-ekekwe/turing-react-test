import { agent } from 'superagent';
import 'isomorphic-fetch';
const rootEndpoint = process.env.ROOT_ENDPOINT;

export const endpoint = (path) => {
  if (path) {
    return `${rootEndpoint}/${path}`
  }
  return rootEndpoint;
}

const setHeaderMethod = (requestType, requestBody) => {
  const newBody = JSON.stringify(requestBody)
  let token;
  if(process.browser) {
    const token = localStorage.getItem('token')
  }
  return {
    method: requestType,
    headers: new Headers({
      'user-key': token,
      'Content-Type': 'application/json'
    }),
    body: newBody
  }
}

// Request methods helpers
export const apiGetRequest = (path) =>
  fetch(endpoint(path), setHeaderMethod('GET')).then((res) => {
    return res.json()
  })
export const apiPostRequest = (path, body) =>
  fetch(endpoint(path), setHeaderMethod('POST', body))
    .then((res) => res.json())


export function getDepartments() {
  const path = 'departments';
  return apiGetRequest(path)
}

export function getCategories() {
  const path = 'categories';
  return apiGetRequest(path)
}

export function getAllProducts(page = 1) {
  const path = `products?page=${page}`;
  return apiGetRequest(path);
}

export function getCategoriesByDepartment(departmentId) {
  const path = `categories/inDepartment/${departmentId}`;
  return apiGetRequest(path)
}

export function getProductsByDepartment(departmentId) {
  const path = `products/inDepartment/${departmentId}`;
  return apiGetRequest(path)
}

export function getProductById(productId) {
  const path = `products/${productId}`;
  return apiGetRequest(path);
}

export function getProductReviews(productId) {
  const path = `products/${productId}/reviews`;
  return apiGetRequest(path);
}

export function createCustomer(formData) {
  const path = 'customers';
  return apiPostRequest(path, formData)
}

export function loginCustomer(formData) {
  const path = 'customers/login';
  return apiPostRequest(path, formData)
}

export function getProductAttributes(productId) {
  const path = `attributes/inProduct/${productId}`;
  return  apiGetRequest(path);
}

export function productSearch(query_string) {
  const path = `products/search?query_string=${query_string}`
  return apiGetRequest(path);
}

export function createOrder(order) {
  const path = 'orders';
  return apiPostRequest(path, order)
}

export function getOrder(order_id) {
  const path = `orders/${order_id}`
  return apiGetRequest(path);
}

export function getAllCustomerOrders(customer_id) {
  const path = `orders/inCustomer/${customer_id}`
  return apiGetRequest(path);
}