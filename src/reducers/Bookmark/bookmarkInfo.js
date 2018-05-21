/**
 * Created by tomino on 18/05/10.
 */
import * as AppType from '../../constants/App';


const initialState = {
  isFetching: false,
  bookmark: {
    _id:"",
    title:"",
    description:"",
    otherUser:[],
    thumbnail:[]
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
    case AppType.TRIP_INFO_EDIT_RESULT:
      return Object.assign({},state, {
        trip_info: state.trip_info.map((val) => {
          if(val._id === action.data._id){
            val.description = action.data.description;
            val.thumbnail.push(action.data.thumbnail);
          }
          return val;
        })
      });
    case AppType.TRIP_INFO_DELETE_RESULT:
      return Object.assign({},state, {
        trip_info: state.trip_info.filter((val) => {
          if(val._id !== action.data) return val;
        })
      });
    case AppType.ADD_PERMISSION_RESULT:
      return Object.assign({},state, {
        bookmark: {
          _id: state.bookmark._id,
          title: state.bookmark.title,
          description: state.bookmark.description,
          otherUser: [...state.bookmark.otherUser,action.data],
          thumbnail: state.bookmark.thumbnail,
        }
      });
    case AppType.DEL_PERMISSION_RESULT:
      return Object.assign({},state, {
        bookmark: {
          _id: state.bookmark._id,
          title: state.bookmark.title,
          description: state.bookmark.description,
          otherUser: [...state.bookmark.otherUser.filter((val) => {
            if (val._id !== action.data) return val;
            }
          )],
          thumbnail: state.bookmark.thumbnail,
        }
      });
    default:
      return state
  }
}

