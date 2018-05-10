/**
 * Created by tomihei on 17/04/03.
 */
import Axios from 'axios';

export function deleteData (url){
  const token = localStorage.getItem('token');
  return Axios({
    method:'delete',
    url: url,
    headers: {Authorization: token}
  }).then( response => ({response}))
    .catch( error => ({error}))
}
