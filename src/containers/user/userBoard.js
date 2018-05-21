/**
 * Created by tomihei on 17/04/03.
 */
import React from 'react'
import { connect } from 'react-redux'
import UserBoard from '../../components/User/userBookmark';
import * as UserBoardaction from '../../actions/newBoard';

function mapStateToProps(state) {
  return {
    auth: state.userPage.auth,
    userHandleId: state.app.userHandleId,
    user : state.userPage.user,
  }
}

// clickでactionを飛ばず
function mapDispatchToProps(dispatch) {
  return {
    openDialog: () => {
      dispatch(UserBoardaction.openDialog())
    },
  }
}


//connect関数でReduxとReactコンポーネントを繋ぐ
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserBoard)
