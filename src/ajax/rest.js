/**
 * Created by tomino on 18/05/13.
 */
import Axios from 'axios';
import * as URL from '../constants/AjaxUrl';

export function get(url) {
  const token = localStorage.getItem('token');
  return Axios({
    method:'get',
    url: url,
    headers: {Authorization: token}
  }).then( response => ({response}))
    .catch( error => ({error}))
}

export function getPage (page, url){
  const token = localStorage.getItem('token');
  return Axios({
    method:'get',
    url: url,
    params: page,
    headers: {Authorization: token}
  }).then( response => ({response}))
    .catch( error => ({error}))
}


export function post (data,url){
  const token = localStorage.getItem('token');
  return Axios({
    method:'post',
    url:url,
    data: data,
    headers: {Authorization: token}
  }).then(response => ({response}))
    .catch((error) => ({error}))
}


export function put (data,url){
  const token = localStorage.getItem('token');
  return Axios({
    method:'put',
    url:url,
    data: data,
    headers: {Authorization: token}
  }).then(response => ({response}))
    .catch((error) => ({error}))
}

export function del (url){
  const token = localStorage.getItem('token');
  return Axios({
    method:'delete',
    url: url,
    headers: {Authorization: token}
  }).then( response => ({response}))
    .catch( error => ({error}))
}
