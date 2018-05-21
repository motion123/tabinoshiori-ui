/**
 * Created by tomino on 18/05/14.
 */
import Axios from 'axios';
import * as URL from '../constants/AjaxUrl';

export function post (data){
  let val = {
    image:data,
  };
  return Axios({
    method:'post',
    url:'https://api.imgur.com/3/image',
    data: val,
    timeout : 100000,
    headers: {Authorization: "Client-ID " + "87cb623f95ef411" }
  }).then(response => ({response}))
    .catch((error) => ({error}))
}

