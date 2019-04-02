import { agent } from 'superagent';
const rootEndpoint = process.env.ROOT_ENDPOINT;

export const endpoint = (path) => {
  if (path) {
    return `${rootEndpoint}/${path}`
  }
  return rootEndpoint;
}

const setHeaderMethod = (requestType, requestBody) => {
  const newBody = JSON.stringify(requestBody)
  const token = localStorage.getItem('token')
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