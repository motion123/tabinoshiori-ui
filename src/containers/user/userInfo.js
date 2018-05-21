/**
 * Created by tomino on 17/03/14.
 */
import React from 'react'
import { connect } from 'react-redux'
import UserInfo from '../../components/User/userInfo';
import * as UserPageAction from '../../actions/userPage';

function mapStateToProps(state) {
  return {
    isFetching: state.userPage.isFetching,
    user: state.userPage.user,
    user_id: state.app.user_id,
  }
}

// clickでactionを飛ばず
function mapDispatchToProps(dispatch) {
  return {
    requestUserAuth: (id) => {
      dispatch(UserPageAction.userAuthRequest(id))
    },
  }
}


//connect関数でReduxとReactコンポーネントを繋ぐ
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfo)
