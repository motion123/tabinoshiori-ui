/**
 * Created by tomihei on 17/05/31.
 */
import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import MiniLoading from '../const/miniLoader';
import {Link} from 'react-router';
import styles from './followList.css';
import Avatar from 'material-ui/Avatar';

export default class FollowList extends React.Component {


  render() {
    const {
      isFetching,
      followList,
      requestFollowList,
      hasMore,
      page,
      url,
      closeDialog,
    } = this.props;

    let item = [];
    followList.map((follow,index) =>{
        item.push(
            <Content
              key={follow._id}
              follow={follow}
              follower={follow.follower}
              follow_board={follow.board}
            />
        );
    });

    return (
      <InfiniteScroll
        initialLoad={false}
        loadMore={() => requestFollowList(url,{page})}
        loader={<MiniLoading size={20}/>}
        hasMore={hasMore && !isFetching}
        useWindow={true}
      >
        {item}
      </InfiniteScroll>
    );
  }
}

const Content = ({follow,follow_board,follower}) => (
  <div className={styles.margin}>
    <Link
      onClick={() => closeDialog()}
      to={"/user/"+ follower.user_id}  className={styles.box}>
      <div className={styles.img}>
        <Avatar
          src={follower.img}
        />
      </div>
    <span className={styles.name}>{follower.name + "さん"}</span>
    </Link>
  </div>
);
