/**
 * Created by tomihei on 17/03/22.
 */
import * as AppType from '../../constants/App';

const initialState = {
  isFetching: false,
  videoUrl:"",
  videoData: [],
  open:false,
  errorMessage:"",
};

export default function urlParser(state = initialState, action) {
  switch (action.type){
    case AppType.PARSE_URL_OPEN:
      return Object.assign({}, state, {
        errorMessage:"",
        open:true,
      });
    case AppType.PARSE_URL_CLOSE:
      return Object.assign({}, state, {
        open:false,
      });
    case AppType.CHANGE_URL:
      return Object.assign({}, state, {
        videoUrl: action.videoUrl,
        errorMessage:"",
        videoData:[],
      });
    case AppType.PARSE_URL_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case AppType.PARSE_URL_RESULT:
      return Object.assign({}, state, {
        isFetching: false,
        videoData: action.data,
      });
    case AppType.PARSE_URL_REQUEST_FAILED:
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: "URLバリデーションエラー",
      });
    default:
      return state
  }
}
