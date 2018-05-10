/**
 * Created by tomihei on 17/02/10.
 */
import * as AppType from '../../constants/App';

const initialState = {
    buttonLabel: "ログイン",
    name:"",
    email: "",
    password: "",
    newUser: false
};

export default function loginFormInput(state = initialState, action) {
  switch (action.type){
    case AppType.CHANGE_EMAIL:
      return Object.assign({}, state ,{
        email: action.email
      });
    case AppType.CHANGE_PASSWORD:
      return Object.assign({}, state, {
        password: action.password
      });
    case AppType.CHANGE_NAME:
      return Object.assign({}, state, {
        name: action.name
      });
    case AppType.CREATE_USER:
      return Object.assign({}, state, {
        buttonLabel: action.buttonLabel,
        newUser: action.newUser
      });
    default:
      return state
  }
}



