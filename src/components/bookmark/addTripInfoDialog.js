/**
 * Created by tomino on 18/05/11.
 */
import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default class addTripInfoDialog extends React.Component {

  render() {
    const {
      open,
      closeDialog,
      openDialog,
    } = this.props;


    return (
      <FlatButton
        label={"新しいイベントを追加"}
        onTouchTap={() => openDialog()}
        secondary={true}
      >
        <Dialog
          title="イベントを追加"
          autoScrollBodyContent={true}
          open={open}
          onRequestClose={() => closeDialog()}
        >
        </Dialog>
      </FlatButton>
    );
  }
}
