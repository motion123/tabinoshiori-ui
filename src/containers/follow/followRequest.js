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
    requestIsFollowBoard:(id) => {
      dispatch(FollowAction.isFollowBoardRequest(id))
    },
    requestIsFollowUser:(id) => {
      dispatch(FollowAction.isFollowUserRequest(id))
    },
    requestFollow: (data) => {
      dispatch(FollowAction.followRequest(data))
    },
    requestDefollow: (id) => {
      dispatch(FollowAction.defollowRequest(id))
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
