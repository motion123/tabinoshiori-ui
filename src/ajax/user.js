/**
 * Created by tomino on 17/02/21.
 */
import Axios from 'axios';
import * as URL from '../constants/AjaxUrl';

export function userAuth (token){
    return Axios({
      method:'get',
      url: URL.TOKEN_AUTH_URL,
      headers: {Authorization: token}
    }).then( response => ({response}))
      .catch( error => ({error}))
}

export function userLogin (data){
  const url = data.newUser ? URL.NEWUSER_URL: URL.LOGIN_URL;
  return Axios.post(url,data)
    .then(response => ({response}))
    .catch(error => ({error}))
}

export function get(url) {
  const token = localStorage.getItem('token');
  return Axios({
    method:'get',
    url: url,
    headers: {Authorization: token}
  }).then( response => ({response}))
    .catch( error => ({error}))
}
