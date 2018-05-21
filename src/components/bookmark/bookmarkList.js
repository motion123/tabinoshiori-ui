/**
 * Created by tomino on 18/05/18.
 */
import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import MiniLoading from '../const/miniLoader';
import styles from './bookmarkList.css';
import {Grid, Row, Col} from 'react-flexbox-grid';
import {Link} from 'react-router';


export default class BookmarkList extends React.Component {

  componentWillMount(){
    this.props.initBookmarkList();
  }

  render() {
    const {
      isFetching,
      bookmarkList,
      requestBookmarkList,
      hasMore,
      page,
      userId,
      init,
      onAdmin,
    } = this.props;

    let item = [];

    bookmarkList.map((bookmark) => {
     item.push(
      <Content
        key={bookmark._id}
        bookmark={bookmark}
        onAdmin={onAdmin}
      />
     )
    });

    return (
        <InfiniteScroll
          initialLoad={true}
          loadMore={() => requestBookmarkList(userId, {page})}
          loader={<MiniLoading size={20}/>}
          hasMore={hasMore && !isFetching && init}
          useWindow={false}
        >
          {item}
        </InfiniteScroll>
    );

  }
}


const Content = ({bookmark,onAdmin}) => (
      <div
        className={styles.Col}
      >
        <div className={styles.content}>
          <Link to={"/bookmark/" + bookmark._id}>

            <img
              src={bookmark.thumbnail}
              className={styles.thumbnail}
            />
            <div className={styles.back}>
              <div className={styles.titlebox}>
                <div className={styles.box}>
                  <div className={styles.title}>
                    {bookmark.title}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
);
