/**
 * Created by tomino on 18/05/10.
 */
import * as AppType from '../../constants/App';


const initialState = {
  isFetching: false,
  title:"",
  description:"",
  message:{
    title: "",
    description:"",
  }
};

export default function createBookmark(state = initialState, action) {
  switch (action.type){
    case AppType.CBT:
      return Object.assign({}, state, {
        title: action.title,
      });
    case AppType.CBD:
      return Object.assign({}, state, {
        description: action.desc,
      });
    case AppType.CBRE:
      return Object.assign({}, state, {
        isFetching:true,
        message:{
          title: "",
          description:"",
        },
      });
    case AppType.CBRS:
      return Object.assign({}, state, {
        isFetching:false,
      });
    case AppType.CBF:
      return Object.assign({}, state, {
        isFetching:false,
        message: {
          title: action.error.title,
          description: action.error.description
        }
      });
    default:
      return state
  }
}
