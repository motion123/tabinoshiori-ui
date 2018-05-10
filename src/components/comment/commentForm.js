/**
 * Created by tomihei on 17/04/06.
 */
import React from 'react'
import * as Root from '../../constants/root';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import styles from './commentForm.css';

export default class UrlForm extends React.Component {

  render() {
    const {
      changeComment,
      requestCommentPost,
      isFetching,
      comment,
      videoId,
      res,
      resId,
    } = this.props;


    let data = res ? ({
      comment:comment,
      video_id:videoId,
      res: true,
      res_id: resId,
    }): ({
      comment: comment,
      video_id: videoId,
    });

    return (
      <div className={styles.box}>
          <form >
            <div>
              <textarea
              placeholder="新しいコメント"
              type="text"
              onChange={(e) => changeComment(e.target.value)}
              rows="3"
              className={styles.form}
              maxLength="3000"
              disabled={isFetching}
              value={comment}
              >
              </textarea>

            </div>
          </form>
          <div className={styles.buttonBox}>

            <FlatButton
           label="送信"
           primary={true}
           onTouchTap={() => requestCommentPost(data)}
           disabled={isFetching}
          />
            </div>
      </div>
    )
  }
}
