/**
 * Created by tomino on 17/07/01.
 */
import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import SearchContents from './searchContent';
import MiniLoading from '../const/miniLoader';
import styles from './searchList.css';

export default class SearchList extends React.Component {

  componentWillReceiveProps(nextProps){
    if(this.props.params.word != nextProps.params.word){
      this.props.initSearchList();
    }
  }

  render() {
    const {
      isFetching,
      searchList,
      requestSearchList,
      hasMore,
      page,
      params,
    } = this.props;

    let item =  <SearchContents
        videoList={searchList}
        auth={false}
      />;

    return (
      <div>
        <div className={styles.content}>
          <span>{params.word}</span>
          <span> の検索結果</span>
        </div>
      <InfiniteScroll
        loadMore={() => requestSearchList(params.word,{page})}
        loader={<MiniLoading size={20}/>}
        hasMore={hasMore && !isFetching}
        useWindow={true}
      >
        {item}
      </InfiniteScroll>
      </div>
    );
  }
}
