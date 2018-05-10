/**
 * Created by tomihei on 17/06/07.
 */
import React from 'react'
import { connect } from 'react-redux'
import FollowerList from '../../components/follow/followerList'
import * as follower from '../../actions/follower'

function mapStateToProps(state) {
  return {
    isFetching: state.followerList.isFetching,
    followerList: state.followerList.followerList,
    hasMore: state.followerList.hasMore,
    page: state.followerList.page,
    init: state.followerList.init,

  }
}

// clickでactionを飛ばず
function mapDispatchToProps(dispatch) {
  return {
    initFollowerList: () => {
      dispatch(follower.initFollowerList())
    },
    requestFollowerList: (url,page) => {
      dispatch(follower.followerListRequest(url,page))
    },
  }
}


//connect関数でReduxとReactコンポーネントを繋ぐ
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FollowerList)
