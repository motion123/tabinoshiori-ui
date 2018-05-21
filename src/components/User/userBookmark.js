/**
 * Created by tomihei on 17/04/01.
 */
import React from 'react';
import styles from './userBookmark.css';
import FlatButton from 'material-ui/FlatButton';
import BookmarkList from '../../containers/Bookmark/bookmarkList';


export default class UserBookmark extends React.Component {

  render() {
    const {
      params,
      user_id,
    } = this.props;

    const userId = params;

    return (

      <div>

        <div className={styles.border}>
          <div className={styles.box}>
            <h2 className={styles.board}>しおり一覧</h2>
          </div>
        </div>

        <div className={styles.boardback}>
        <BookmarkList
          userId={userId}
          card={true}
          window={true}
          onAdmin={params.userId === user_id}
        />
          </div>
       </div>
    );
  }
}
