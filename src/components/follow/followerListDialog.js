/**
 * Created by tomihei on 17/06/01.
 */
import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import * as URL from '../../constants/AjaxUrl';
import FollowerList from '../../containers/follow/followerList';
import styles from './followListDialog.css';

export default class FollowerListDialog extends React.Component {

  componentWillMount(){
    this.props.initFollowerList();
    this.props.requestFollowerList(this.props.url);
  }

  render() {
    const {
      open,
      closeDialog,
      openDialog,
      url,
      followerCount,
    } = this.props;



    return (
      <FlatButton
        label={"フォロワー : " + followerCount}
        onTouchTap={() => openDialog()}
        className={styles.button}
        secondary={true}
      >
      <Dialog
        title="フォロワ−"
        autoScrollBodyContent={true}
        contentClassName={styles.content}
        bodyClassName={styles.body}
        open={open}
        onRequestClose={() => closeDialog()}
      >
        <FollowerList
          url={url}
          closeDialog={() => closeDialog()}
        />
      </Dialog>
      </FlatButton>
    );
  }
}
