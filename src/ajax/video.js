/**
 * Created by tomihei on 17/02/28.
 */
import Axios from 'axios';

export function get (page, url){
  const token = localStorage.getItem('token');
  return Axios({
    method:'get',
    url: url,
    params: page,
    headers: {Authorization: token}
  }).then( response => ({response}))
    .catch( error => ({error}))
}

export function add (data,url){
  const token = localStorage.getItem('token');
  return Axios({
    method:'post',
    url:url,
    data: data,
    headers: {Authorization: token}
  }).then(response => ({response}))
    .catch((error) => ({error}))
}
