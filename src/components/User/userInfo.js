/**
 * Created by tomihei on 17/03/31.
 */
import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import styles from './userInfo.css';
import Loading from '../const/loading';
import Avatar from 'material-ui/Avatar';
import FollowerButton from '../../containers/follow/followerListDialog';
import FolloweeButton from '../../containers/follow/followeeListDialog';
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
      params,
      userHandleId,
      isFetching,
      user,
      children,
    } = this.props;

    return isFetching ? (<Loading />):(
      <Grid fluid className={styles.Grid}>
        <div className={styles.container}>
            <div className={styles.box}>
              <div>
              <Avatar
                size={70}
                src={user.img}
              />
              </div>
              <h1 className={styles.name}>{user.name}</h1>
              {
                params.boardId == null ? (  <div className={styles.followbox}>
                <div className={styles.follower}>
                  <FollowerButton
                    url={URL.FOLLOWER_INFO + user._id}
                  />
                </div>
                <div className={styles.followee}>
                  <FolloweeButton
                    url={URL.FOLLOWEE_INFO + user._id}
                  />
                </div>
              </div>): (null)
              }

            </div>
          </div>
        {children}
        </Grid>
        )
  }
}
