/**
 * Created by tomihei on 17/02/10.
 */
import React from 'react'
import { connect } from 'react-redux'
import Login from '../components/loginForm/loginform'
import * as login from '../actions/login'


function mapStateToProps(state) {
  return {
    form: state.loginFormInput,
    loginInfo: state.loginInfo,
    newUser: state.loginFormInput.newUser
  }
}

// clickでactionを飛ばず
function mapDispatchToProps(dispatch) {
  return {
    onSubmitReq: (data) => {
      dispatch(login.loginInfoRequest(data))
    },
    changeEmail: (email) => {
      dispatch(login.changeEmail(email))
    },
    changePassword: (pass) => {
      dispatch(login.changePassword(pass))
    },
    changeName:(name) => {
      dispatch(login.changeName(name))
    },
    onNewUser: () => {
      dispatch(login.createUser())
    }
  }
}


//connect関数でReduxとReactコンポーネントを繋ぐ
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
