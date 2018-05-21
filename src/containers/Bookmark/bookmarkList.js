/**
 * Created by tomino on 18/05/18.
 */
import React from 'react'
import { connect } from 'react-redux'
import BookmarkList from '../../components/bookmark/bookmarkList'
import * as bookmarkList from '../../actions/bookmarkList';

function mapStateToProps(state) {
  return {
    isFetching: state.bookmarkList.isFetching,
    bookmarkList: state.bookmarkList.bookmarkList,
    bookmarkId: state.bookmarkList.bookmarkId,
    hasMore: state.bookmarkList.hasMore,
    page: state.bookmarkList.page,
    init: state.bookmarkList.init,
  }
}

// clickでactionを飛ばず
function mapDispatchToProps(dispatch) {
  return {
    initBookmarkList: () => {
      dispatch(bookmarkList.bookmarkListInit())
    },
    requestBookmarkList: (id,page) => {
      dispatch(bookmarkList.bookmarkListRequest(id,page))
    },
  }
}


//connect関数でReduxとReactコンポーネントを繋ぐ
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookmarkList)
