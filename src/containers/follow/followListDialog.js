/**
 * Created by tomihei on 17/06/01.
 */
import React from 'react'
import { connect } from 'react-redux'
import FollowListDialog from '../../components/follow/followListDialog'
import * as follow from '../../actions/follow'

function mapStateToProps(state) {
  return {
    open: state.followList.open,
    followCount: state.followList.followCount,
  }
}

// clickでactionを飛ばず
function mapDispatchToProps(dispatch) {
  return {
    initFollowList: () => {
      dispatch(follow.initFollowList())
    },
    requestFollowList:(url) => {
      dispatch(follow.followListRequest(url,1))
    },
    openDialog: () => {
      dispatch(follow.followListOpen())
    },
    closeDialog: () => {
      dispatch(follow.followListClose())
    },
  }
}


//connect関数でReduxとReactコンポーネントを繋ぐ
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FollowListDialog)
