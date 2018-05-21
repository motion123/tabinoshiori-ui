/**
 * Created by tomihei on 17/05/19.
 */
import React from 'react';
import styles from './followButton.css';
import IconButton from 'material-ui/IconButton';
import Favorite from 'material-ui/svg-icons/action/favorite';
import FavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import RaisedButton from 'material-ui/RaisedButton';


export default class FollowButton extends React.Component {

  componentWillMount(){
      this.props.requestIsFollowUser(this.props.userId);
  }

  render() {
    const {
      requestFollow,
      requestDefollowUser,
      userId,
      followList,
    } = this.props;

    const postdata = {
      user_id:userId,
    };

    const isFollow = followList.indexOf(userId) !== -1 ? (true) : (false);

    return (
      <RaisedButton
        onTouchTap={isFollow ? ( () => requestFollow(postdata))
          : ( () => requestDefollowUser(userId))
        }
        secondary={isFollow ? (true) : (false)}
        icon=   {isFollow ? (
          <Favorite className={styles.button}/>
        ) :(
          <FavoriteBorder className={styles.border}/>
        )}
      />

       );
  }
}
