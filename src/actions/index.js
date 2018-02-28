import axios from 'axios';

const API_KEY = '123';

const ROOT_URL = 'http://lcboapi.com/products';

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

