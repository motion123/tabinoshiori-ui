/**
 * Created by tomihei on 17/02/12.
 */

import React from 'react'
import { connect } from 'react-redux'
import App from '../components/App/app'
import * as ap from '../actions/app'

function mapStateToProps(state) {
  return {
    isLogin: state.app.isLogin,
    isPrepared: state.app.isPrepared
  }
}

// clickでactionを飛ばず
function mapDispatchToProps(dispatch) {
  return {
    checkLogin: () => {
      dispatch(ap.auth_request())
    }
  }
}


//connect関数でReduxとReactコンポーネントを繋ぐ
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
