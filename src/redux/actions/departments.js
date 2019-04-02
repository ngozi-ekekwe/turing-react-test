import { GET_ALL_DEPARTMENTS, GET_ALL_DEPARTMENTS_FAILURE, GET_ALL_DEPARTMENTS_SUCCESS } from '../actionTypes'

export function getAllDepartmentsSuccess(departments) {
  return {
    type: GET_ALL_DEPARTMENTS_SUCCESS,
    departments
  }
}

export function getAllDeprtmentsFailure(err) {
  return {
    type: GET_ALL_DEPARTMENTS_FAILURE,
    err
  }
}
