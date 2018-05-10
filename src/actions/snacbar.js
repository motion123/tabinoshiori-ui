/**
 * Created by tomihei on 17/03/27.
 */
import * as AppType from '../constants/App';

export function openSnackbar(data) {
  return {
    type:AppType.SNACBAR_OPEN,
    message:data,
  }
}

export  function closeSnackbar() {
  return {
    type: AppType.SNACBAR_CLOSE,
  }
}
