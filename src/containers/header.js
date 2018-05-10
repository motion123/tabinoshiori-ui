/**
 * Created by tomihei on 17/02/23.
 */

import React from 'react'
import { connect } from 'react-redux'
import Header from '../components/header/header'
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
    onLoggedOut: () => {
      dispatch(ap.requestLogout())
    }
  }
}


//connect関数でReduxとReactコンポーネントを繋ぐ
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
