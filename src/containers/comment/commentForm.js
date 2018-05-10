/**
 * Created by tomihei on 17/04/05.
 */
import React from 'react'
import { connect } from 'react-redux'
import CommentForm from '../../components/comment/commentForm'
import * as commentAction from '../../actions/comment'

function mapStateToProps(state) {
  return {
    isFetching: state.comment.isFetching,
    comment: state.comment.comment,
  }
}

// clickでactionを飛ばず
function mapDispatchToProps(dispatch) {
  return {
    changeComment: (comment) =>{
      dispatch(commentAction.changeComment(comment))
    },
    requestCommentPost: (data) => {
      dispatch(commentAction.postRequest(data))
    },
  }
}


//connect関数でReduxとReactコンポーネントを繋ぐ
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm)
