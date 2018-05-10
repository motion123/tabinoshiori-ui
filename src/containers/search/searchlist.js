/**
 * Created by tomino on 17/07/01.
 */
import React from 'react'
import { connect } from 'react-redux'
import SearchList from '../../components/search/searchList';
import * as SearchAction from '../../actions/search';

function mapStateToProps(state) {

  return {
    isFetching: state.search.isFetching,
    page: state.search.page,
    word: state.search.word,
    searchList: state.search.searchList,
    hasMore: state.search.hasMore,
  }
}

// clickでactionを飛ばず
function mapDispatchToProps(dispatch) {
  return {
    initSearchList:() => {
      dispatch(SearchAction.initSearchList())
    },
    requestSearchList:(word,page) => {
      dispatch(SearchAction.searchListRequest(word,page))
    },
  }
}


//connect関数でReduxとReactコンポーネントを繋ぐ
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchList)
