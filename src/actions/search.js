/**
 * Created by tomihei on 17/06/21.
 */

import * as AppType from '../constants/App';

export function changeWord(word) {
  return {
    type:AppType.CHANGE_WORD,
    word:word,
  }
}


export function initSearchList() {
  return {
    type: AppType.INIT_SEARCH_LIST,
  };
}

export function searchListRequest(word,page) {
  return {
    type: AppType.SEARCH_LIST_REQUEST,
    word: word,
    page: page,
  };
}

export function searchListResult(data) {
  return{
    type: AppType.SEARCH_LIST_RESULT,
    data:data,
  }
}

export function lastPage() {
  return{
    type: AppType.SEARCH_LIST_LAST_PAGE,
  }
}
