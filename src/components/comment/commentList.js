/**
 * Created by tomihei on 17/04/05.
 */
import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import CommentContents from '../../containers/comment/commentContent';
import MiniLoading from '../const/miniLoader';

export default class BoardList extends React.Component {

  componentWillMount(){
    this.props.initCommentList();
  }

  render() {
    const {
      isFetching,
      commentList,
      requestCommentList,
      hasMore,
      videoId,
      page,
      window,
    } = this.props;

    let onWindow = window ? true : false;

    let item =<CommentContents
      commentList={commentList}
    />;

    return (
      <InfiniteScroll
        loadMore={() => requestCommentList(videoId,{page})}
        loader={<MiniLoading size={20}/>}
        hasMore={hasMore && !isFetching}
        useWindow={onWindow}
      >
        {item}
      </InfiniteScroll>
        );
  }
}
