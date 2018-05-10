/**
 * Created by tomino on 18/05/10.
 */
import React from 'react'
import { connect } from 'react-redux'
import CreateBookmark from '../../components/bookmark/createBookmark'
import * as bookmarkAction from '../../actions/bookmark'

function mapStateToProps(state) {
  return {
    isFetching: state.createBookmark.isFetching,
    title: state.createBookmark.title,
    description: state.createBookmark.description,
    message: state.createBookmark.message
  }
}

// clickでactionを飛ばず
function mapDispatchToProps(dispatch) {
  return {
    changeTitle: (title) =>{
      dispatch(bookmarkAction.changeBookmarkTitle(title))
    },
    changeDescription: (desc) => {
      dispatch(bookmarkAction.changeBookmarkDescription(desc))
    },
    createRequest: (data) => {
      dispatch(bookmarkAction.createBookmarkRequest(data))
    },
  }
}


//connect関数でReduxとReactコンポーネントを繋ぐ
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateBookmark)
