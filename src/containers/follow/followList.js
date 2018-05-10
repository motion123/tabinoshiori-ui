/**
 * Created by tomihei on 17/05/31.
 */
import React from 'react'
import { connect } from 'react-redux'
import FollowList from '../../components/follow/followList'
import * as follow from '../../actions/follow'

function mapStateToProps(state) {
  return {
    isFetching: state.followList.isFetching,
    followList: state.followList.followList,
    hasMore: state.followList.hasMore,
    page: state.followList.page,
    init: state.followList.init,

  }
}

// clickでactionを飛ばず
function mapDispatchToProps(dispatch) {
  return {
    initFollowList: () => {
      dispatch(follow.initFollowList())
    },
    requestFollowList: (url,page) => {
      dispatch(follow.followListRequest(url,page))
    },
    closeDialog: () => {
      dispatch(follow.followListClose())
    }
  }
}


//connect関数でReduxとReactコンポーネントを繋ぐ
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FollowList)
