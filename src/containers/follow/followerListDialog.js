/**
 * Created by tomihei on 17/06/01.
 */
import React from 'react'
import { connect } from 'react-redux'
import FollowerListDialog from '../../components/follow/followerListDialog'
import * as follower from '../../actions/follower'

function mapStateToProps(state) {
  return {
    open: state.followerList.open,
    followerCount: state.followerList.followerCount,
  }
}

// clickでactionを飛ばず
function mapDispatchToProps(dispatch) {
  return {
    initFollowerList: () => {
      dispatch(follower.initFollowerList())
    },
    requestFollowerList:(url) => {
      dispatch(follower.followerListRequest(url,1))
    },
    openDialog: () => {
      dispatch(follower.followerListOpen())
    },
    closeDialog: () => {
      dispatch(follower.followerListClose())
    },
  }
}


//connect関数でReduxとReactコンポーネントを繋ぐ
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FollowerListDialog)
