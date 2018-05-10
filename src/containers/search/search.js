/**
 * Created by tomihei on 17/06/21.
 */
import React from 'react'
import { connect } from 'react-redux'
import SearchForm from '../../components/search/searchForm';
import * as SearchAction from '../../actions/search';
import { push } from 'react-router-redux';

function mapStateToProps(state) {
  return {
    isFetching: state.search.isFetching,
    word: state.search.word,
  }
}

// clickでactionを飛ばず
function mapDispatchToProps(dispatch) {
  return {
    initSearchList:() => {
      dispatch(SearchAction.initSearchList())
    },
    changeWord:(word) => {
      dispatch(SearchAction.changeWord(word))
    },
    pushHistory:(word) => {
      dispatch(push('/search/' + word))
    }
  }
}


//connect関数でReduxとReactコンポーネントを繋ぐ
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm)
