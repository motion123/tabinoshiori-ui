/**
 * Created by tomihei on 17/06/07.
 */
import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import MiniLoading from '../const/miniLoader';
import {Link} from 'react-router';
import styles from './followList.css';
import Avatar from 'material-ui/Avatar';

export default class FollowerList extends React.Component {


  render() {
    const {
      isFetching,
      followerList,
      requestFollowerList,
      hasMore,
      page,
      closeDialog,
      url,
    } = this.props;

    let item = [];
    followerList.map((follow,index) =>{
      item.push(
        <Content
          key={follow._id}
          follow={follow}
          closeDialog={closeDialog}
        />
      );
    });

    return (
      <InfiniteScroll
        initialLoad={false}
        loadMore={() => requestFollowerList(url,{page})}
        loader={<MiniLoading size={20}/>}
        hasMore={hasMore && !isFetching}
        useWindow={true}
      >
        {item}
      </InfiniteScroll>
    );
  }
}

const Content = ({follow,closeDialog}) => (
  <div className={styles.margin}>
    <Link
      onClick={() => closeDialog()}
      to={"/user/"+ follow._id} className={styles.box}>
      <div className={styles.img}>
        <Avatar
          src={follow.thumbnail}
        />
      </div>
      <span className={styles.name}>{follow.name + "さん"}</span>
    </Link>
  </div>
);
