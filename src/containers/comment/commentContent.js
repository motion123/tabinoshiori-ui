/**
 * Created by tomihei on 17/05/18.
 */
import React from 'react'
import { connect } from 'react-redux'
import CommentContent from '../../components/comment/commentContent'
import * as commentAction from '../../actions/comment'

function mapStateToProps(state) {
  return {
    resFormIsOpen: state.comment.resFormOpen,
    resFormId: state.comment.resFormId,
  }
}

// clickでactionを飛ばず
function mapDispatchToProps(dispatch) {
  return {
    formOpen: (id) => {
      dispatch(commentAction.openComment(id))
    },
    formClose: () => {
      dispatch(commentAction.closeComment())
    }
  }
}


//connect関数でReduxとReactコンポーネントを繋ぐ
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentContent)
