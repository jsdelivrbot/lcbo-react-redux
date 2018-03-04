import axios from 'axios';

const API_KEY = 'MDo2NDM0ZTAwNi0xZjlmLTExZTgtYmQ5MS02MzNkYjRkMmVjNDA6SzV0cnhTQVVhVlltVURsVVhldVpJc0N5UW05QUk1cWR0eTho';

const ROOT_URL = 'https://lcboapi.com/products';

export const FETCH_ALCOHOL_CHOICES = 'FETCH_ALCOHOL_CHOICES';
export const FETCH_ALCOHOL_CHOICES_FAILED = 'FETCH_ALCOHOL_CHOICES_FAILED';

export const FETCH_BOTTLE = 'FETCH_BOTTLE';
export const FETCH_BOTTLE_FAILED = 'FETCH_BOTTLE_FAILED';

export const CLEAR_CHOICES = 'CLEAR_CHOICES';

export function fetchAlcoholChoices(type) {
  const request = axios.get(`${ROOT_URL}?per_page=100&q=${type}&access_key=${API_KEY}`);

  return function (dispatch) {
    return request.then(
      result => dispatch({
        type: FETCH_ALCOHOL_CHOICES,
        payload: result
      }),
      error => dispatch({
        type: FETCH_ALCOHOL_CHOICES_FAILED,
        payload: error
      }));
  };
}

export function fetchBottle(id) {
  const request = axios.get(`${ROOT_URL}/${id}?access_key=${API_KEY}`);

  return function (dispatch) {
    return request.then(
      result => dispatch({
        type: FETCH_BOTTLE,
        payload: result
      }),
      error => dispatch({
        type: FETCH_BOTTLE_FAILED,
        payload: error
      }));
  };
}

export function clearChoiceList() {
  return {
    type: CLEAR_CHOICES
  }
}

