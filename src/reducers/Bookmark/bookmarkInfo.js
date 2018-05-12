/**
 * Created by tomino on 18/05/10.
 */
import * as AppType from '../../constants/App';


const initialState = {
  isFetching: false,
  bookmark: {
    title:"",
    description:"",
    other_user:[],
    thumbnail:""
  },
  trip_info:[],
};

export default function bookmarkInfo(state = initialState, action) {
  switch (action.type){
    case AppType.BIRE:
      return Object.assign({}, state, {
        isFetching:true
      });
    case AppType.BIRS:
      return Object.assign({}, state, {
        isFetching:false,
        bookmark: action.data,
        trip_info:action.data.trip_info,
      });
    case AppType.BTIE:
      return Object.assign({}, state, {
        trip_info:[
          ...state.trip_info.filter((cont,index) => index < action.aId && index != action.bId),
          state.trip_info[action.bId > action.aId ? action.bId : action.aId],
          state.trip_info[action.bId < action.aId ? action.bId : action.aId],
          ...state.trip_info.slice(action.aId + 1).filter((cont,index) => index + action.aId + 1 != action.bId)
          //イライライライラ
        ]
      });
    case AppType.TRIP_INFO_RESULT:
      return Object.assign({}, state, {
        trip_info:[
          ...state.trip_info,
          action.data,
        ]
      });
    default:
      return state
  }
}

