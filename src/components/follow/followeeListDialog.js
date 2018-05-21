/**
 * Created by tomihei on 17/06/01.
 */
import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import * as URL from '../../constants/AjaxUrl';
import FolloweeList from '../../containers/follow/followeeList';
import styles from './followListDialog.css';

export default class FolloweeListDialog extends React.Component {

  componentWillMount(){
    this.props.initFolloweeList();
    this.props.requestFolloweeList(this.props.url);
  }

  render() {
    const {
      open,
      closeDialog,
      openDialog,
      url,
      followeeCount,
    } = this.props;



    return (
      <FlatButton
        label={"フォロー : " + followeeCount}
        onTouchTap={() => openDialog()}
        className={styles.button}
        secondary={true}
      >
      <Dialog
        title="フォロー"
        autoScrollBodyContent={true}
        contentClassName={styles.content}
        bodyClassName={styles.body}
        open={open}
        onRequestClose={() => closeDialog()}
      >
        <FolloweeList
          url={url}
          closeDialog={() => closeDialog()}
        />
      </Dialog>
      </FlatButton>
    );
  }
}
