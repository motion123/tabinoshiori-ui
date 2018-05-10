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
    if(this.props.isBoard) {
      this.props.requestIsFollowBoard(this.props.boardId);
    }else {
      this.props.requestIsFollowUser(this.props.userId);
    }
  }

  render() {
    const {
      isBoard,
      boardId,
      requestFollow,
      requestDefollow,
      requestDefollowUser,
      userId,
      followList,
    } = this.props;

    const postdata = {
      user_id:userId,
      board_id: boardId,
    };

    const isFollow = isBoard ? (followList.indexOf(boardId) !== -1  ? (true) : (false))
      : (followList.indexOf(userId) !== -1 ? (true) : (false));

    return (
      <RaisedButton
        onTouchTap={isBoard   && !isFollow ? ( () => requestFollow(postdata))
                 : (isFollow  && !isBoard  ? ( () => requestDefollowUser(userId))
                 : ((isFollow && isBoard   ? ( () => requestDefollow(boardId))
                 : (null))
        ))}
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
