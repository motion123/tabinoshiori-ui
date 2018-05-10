/**
 * Created by tomihei on 17/04/03.
 */
import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import * as styles from './delete.css';

export default class AddVideo extends React.Component {

  render() {
    const {
      url,
      open,
      closeDialog,
      requestDelete,
    } = this.props;

    const actions = [
      <FlatButton
        label="はい"
        primary={true}
        onTouchTap={() => requestDelete(url)}
      />,
      <FlatButton
        label="いいえ"
        onTouchTap={() => closeDialog()}
      />,
    ];
    return (
      <Dialog
        title="削除しますか？"
        actions={actions}
        autoScrollBodyContent={true}
        contentClassName={styles.content}
        bodyClassName={styles.body}
        actionsContainerClassName={styles.action}
        titleClassName={styles.header}
        open={open}
        onRequestClose={() => closeDialog()}
      >
      </Dialog>
    );
  }
}
