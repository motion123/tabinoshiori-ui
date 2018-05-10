/**
 * Created by tomino on 18/05/10.
 */
import * as AppType from '../constants/App';

export function createBookmarkRequest(data) {
  return{
    type: AppType.CBRE,
    data: data,
  }
}

export function createBookmarkFaild(data){
  return{
    type: AppType.CBF,
    error:data,
  }
}

export function createBookmarkResult(data) {
  return{
    type: AppType.CBRS,
    data:data,
  }
}

export function changeBookmarkTitle(title) {
  return {
    type: AppType.CBT,
    title:title
  }
}

export function changeBookmarkDescription(desc) {
  return {
    type: AppType.CBD,
    desc: desc
  }
}


