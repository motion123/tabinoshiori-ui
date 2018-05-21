/**
 * Created by tomihei on 17/05/19.
 */
import React from 'react'
import { connect } from 'react-redux'
import FollowButton from '../../components/follow/followButton';
import * as FollowAction from '../../actions/follow';

function mapStateToProps(state) {
  return {
    isFetching: state.follow.isFetching,
    followList: state.follow.followList,

  }
}

// clickでactionを飛ばず
function mapDispatchToProps(dispatch) {
  return {
    requestIsFollowUser:(id) => {
      dispatch(FollowAction.isFollowUserRequest(id))
    },
    requestFollow: (data) => {
      dispatch(FollowAction.followRequest(data))
    },
    requestDefollowUser: (id) => {
      dispatch(FollowAction.defollowUserRequest(id))
    }
  }
}


//connect関数でReduxとReactコンポーネントを繋ぐ
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FollowButton)
