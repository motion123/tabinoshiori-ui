/**
 * Created by tomihei on 17/06/04.
 */
import * as AppType from '../constants/App';

export function menuFixed(data){
  return {
    type:AppType.MENU_FIXED,
    data:data,
  }
}

export function initMenuFixed() {
  return{
    type:AppType.INIT_MENU_FIXED,
  }
}
