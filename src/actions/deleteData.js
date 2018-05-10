/**
 * Created by tomihei on 17/04/03.
 */
import * as AppType from '../constants/App';

export function openDialog(url) {
  return {
    type: AppType.DELETE_DATA_OPEN,
    url: url
  }
}

export function closeDialog() {
  return {
    type: AppType.DELETE_DATA_CLOSE,
  }
}

export function deleteDataRequest(url) {
  return {
    type: AppType.DELETE_DATA_REQUEST,
    url:url,
  }
}

export function deleteDataFailed() {
  return {
    type: AppType.DELETE_DATA_FAILED
  }
}
