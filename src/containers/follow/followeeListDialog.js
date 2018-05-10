/**
 * Created by tomihei on 17/06/01.
 */
import React from 'react'
import { connect } from 'react-redux'
import FolloweeListDialog from '../../components/follow/followeeListDialog'
import * as followee from '../../actions/followee'

function mapStateToProps(state) {
  return {
    open: state.followeeList.open,
    followeeCount: state.followeeList.followeeCount,
  }
}

// clickでactionを飛ばず
function mapDispatchToProps(dispatch) {
  return {
    initFolloweeList: () => {
      dispatch(followee.initFolloweeList())
    },
    requestFolloweeList:(url) => {
      dispatch(followee.followeeListRequest(url,1))
    },
    openDialog: () => {
      dispatch(followee.followeeListOpen())
    },
    closeDialog: () => {
      dispatch(followee.followeeListClose())
    },
  }
}


//connect関数でReduxとReactコンポーネントを繋ぐ
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FolloweeListDialog)
