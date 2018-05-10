/**
 * Created by tomihei on 17/06/01.
 */
import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import * as URL from '../../constants/AjaxUrl';
import FollowList from '../../containers/follow/followList';
import styles from './followListDialog.css';
import Favorite from 'material-ui/svg-icons/action/favorite';

export default class FollowListDialog extends React.Component {

  componentWillMount(){
    this.props.initFollowList();
    this.props.requestFollowList(this.props.url);
  }

  render() {
    const {
      open,
      closeDialog,
      openDialog,
      url,
      followCount,
    } = this.props;



    return (
      <FlatButton
        label={followCount}
        onTouchTap={() => openDialog()}
        icon={<Favorite/>}
      >
      <Dialog
        title="フォローしているユーザー"
        autoScrollBodyContent={true}
        contentClassName={styles.content}
        bodyClassName={styles.body}
        open={open}
        onRequestClose={() => closeDialog()}
      >
        <FollowList
          url={url}
        />
      </Dialog>
      </FlatButton>
    );
  }
}
