/**
 * Created by tomino on 18/05/15.
 */
import React from 'react';
import * as Root from '../../constants/root';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import Close from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';
import styles from './scss/permissionList.css';
import Avatar from 'material-ui/Avatar';
import {Link} from 'react-router';


export default class PermissionList extends React.Component {

  render() {
    const {
      otherUser,
      isFetching,
      requestDelPermission,
      openDialog,
      closeDialog,
      open,
      onMobile,
      error_message,
    } = this.props;

    let item = otherUser.map((item,i) =>
      <Link
        key={i}
        to={"/user/" + item._id}
      >
        <li>
          <div>
            <Avatar
              size={40}
              src={item.thumbnail}
            />
            <span>{item.name}</span>
          </div>
          <div>
          <IconButton
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              requestDelPermission(this.props.bookmark_id,item._id)
            }}
          >
            {
              onMobile ? (
                <Close/>
                ):(
                  <Close color="#ffa500"/>
                )
            }
          </IconButton>
          </div>
        </li>
      </Link>
    );

    let content = onMobile ? (
      <RaisedButton
        label="編集者一覧"
        onTouchTap={() => openDialog()}
      >
        <Dialog
          title="編集者一覧"
          autoScrollBodyContent={true}
          open={open}
          onRequestClose={() => closeDialog()}
        >
          <ul className={styles.mobileList}>
            {item}
          </ul>
        </Dialog>
      </RaisedButton>
      ) : (
        <div className={styles.cont}>
        <div className={styles.editor}>
          <div className={styles.headerBox}>
            <h4>編集者一覧</h4>
          </div>
        <ul className={styles.List}>
          {item}
        </ul>
        </div>
        </div>
      );

    return (
      <div className={styles.height}>
        {content}
      </div>
    )
  }
}
