/**
 * Created by tomihei on 17/04/05.
 */
import React from 'react';
import {Link} from 'react-router';
import styles from './commentContent.css';
import Avatar from 'material-ui/Avatar';
import CommentForm from '../../containers/comment/commentForm';

export default class CommentContent extends React.Component {

  render() {
    const {
      commentList,
      resFormIsOpen,
      resFormId,
      formClose,
      formOpen,
    } = this.props;

    let item = [];

    commentList.map((comment) =>{
      item.push (
        <div
          key={comment._id}
        >
          <Content
            comment={comment}
            resFormId={resFormId}
            resFormIsOpen={resFormIsOpen}
            formOpen={formOpen}
            formClose={formClose}
          />
          {comment.res_id.map((response) => {
            return <div
              key={response._id}
            >
            <Content
              comment={response}
              res={true}
            />
            </div>
          })}
        </div>
      );
      }
    );

    return (

        <div>
          {item}
        </div>

    );
  }
}

const Content = ({comment, res, resFormIsOpen, resFormId, formOpen, formClose}) => (
  <div>
    <div
      className={res ? (styles.res) : (styles.box)}
    >
      <div className={styles.img}>
        <Avatar
          src={comment.img}
        />
      </div>
      <div className={styles.info}>
        <div className={styles.name}>
          <Link className={styles.name} to={'/user/' + comment.user_id.user_id}>
            <span>{comment.user_id.name}</span>
          </Link>
        </div>
        <div className={styles.comment}>
          <span>{comment.comment}</span>
        </div>
      </div>
    </div>
    {res != true ? (
      <div className={styles.buttonBox}>
        <button
          className={styles.button}
          onClick={() => formOpen(comment._id)}
        >返信</button>
      </div>
    ) : (null)}
    {resFormIsOpen == true && res != true && resFormId == comment._id ? (
      <div className={styles.FormBox}>
        <CommentForm
          res={true}
          resId={comment._id}
          videoId={comment.video_id}
        />
      </div>
    ) : (null)}
  </div>
);
