/**
 * Created by tomihei on 17/04/05.
 */
import React from 'react'
import { connect } from 'react-redux'
import CommentList from '../../components/comment/commentList'
import * as commentAction from '../../actions/comment'

function mapStateToProps(state) {
  return {
    isFetching: state.comment.isFetching,
    commentList: state.comment.commentList,
    hasMore: state.comment.hasMore,
    page: state.comment.page,
    resFormIsOpen: state.comment.resFormOpen,
    resFormId: state.comment.resFormId,
  }
}

// clickでactionを飛ばず
function mapDispatchToProps(dispatch) {
  return {
    initCommentList: () => {
      dispatch(commentAction.initComment())
    },
    requestCommentList: (id,page) => {
      dispatch(commentAction.listRequet(id,page))
    },
    formOpen: (id) => {
      dispatch(commentAction.openComment(id))
    },
    formClose: (id) => {
      dispatch(commentAction.closeComment())
    }
  }
}


//connect関数でReduxとReactコンポーネントを繋ぐ
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentList)
