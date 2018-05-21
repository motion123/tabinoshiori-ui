/**
 * Created by tomihei on 17/03/31.
 */
import React from 'react';
import styles from './userInfo.css';
import Loading from '../const/loading';
import Avatar from 'material-ui/Avatar';
import FollowerButton from '../../containers/follow/followerListDialog';
import FolloweeButton from '../../containers/follow/followeeListDialog';
import FollowButton from '../../containers/follow/followRequest';
import UserBookmark from './userBookmark';
import * as URL from '../../constants/AjaxUrl';

export default class UserInfo extends React.Component {

  componentWillMount() {
    this.props.requestUserAuth(this.props.params.userId)
  }

  componentWillReceiveProps(nextProps){
    if (this.props.params.userId != nextProps.params.userId){
      this.props.requestUserAuth(nextProps.params.userId)
    }
  }

  render() {
    const {
      user_id,
      isFetching,
      user,
      children,
      params,
    } = this.props;

    return isFetching ? (<Loading />):(
      <div>
        <div className={styles.container}>
            <div className={styles.box}>
              <div>
              <Avatar
                size={70}
                src={user.thumbnail}
              />
              </div>
              <h1 className={styles.name}>{user.name}</h1>
            </div>

          <div className={styles.followbox}>
            <div className={styles.follower}>
              <FollowerButton
                url={URL.FOLLOWER_INFO + params.userId}
              />
            </div>
            <div className={styles.followee}>
              <FolloweeButton
                url={URL.FOLLOWEE_INFO + params.userId}
              />
            </div>
            { user_id === params.userId ? (
                    null
              ) :(
                <div>
                <FollowButton
                  userId={params.userId}
                />
              </div>)
            }
          </div>
          </div>
        <UserBookmark
          user_id={user_id}
          params={params.userId}
        />
      </div>
        )
  }
}
