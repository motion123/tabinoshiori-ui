/**
 * Created by tomihei on 17/06/07.
 */
import React from 'react'
import { connect } from 'react-redux'
import FolloweeList from '../../components/follow/followeeList'
import * as followee from '../../actions/followee'

function mapStateToProps(state) {
  return {
    isFetching: state.followeeList.isFetching,
    followeeList: state.followeeList.followeeList,
    hasMore: state.followeeList.hasMore,
    page: state.followeeList.page,
    init: state.followeeList.init,

  }
}

// clickでactionを飛ばず
function mapDispatchToProps(dispatch) {
  return {
    initFolloweeList: () => {
      dispatch(followee.initFolloweeList())
    },
    requestFolloweeList: (url,page) => {
      dispatch(followee.followeeListRequest(url,page))
    },
  }
}


//connect関数でReduxとReactコンポーネントを繋ぐ
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FolloweeList)
