/**
 * Created by tomihei on 17/05/19.
 */
import React from 'react';
import styles from './followButton.css';
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

    let isFollow = followList.indexOf(userId) != 0 ? (true) : (false);

    return (
      <RaisedButton
        onTouchTap={isFollow ? ( () => requestFollow(postdata))
                 : ( () => requestDefollowUser(userId))}
        primary={isFollow ? (true): (false)}
      >
        {isFollow ? (
          "フォローする"
        ) :(
          "フォローを解除"
        )}
      </RaisedButton>
    );
  }
}
