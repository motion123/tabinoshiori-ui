/**
 * Created by tomino on 18/05/14.
 */
import React from 'react';
import * as Root from '../../constants/root';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';


export default class AddTripInfo extends React.Component {

  render() {
    const {
      name,
      bookmark_id,
      isFetching,
      requestAddPermission,
      changeUserName,
      openDialog,
      closeDialog,
      open,
      error_message,
    } = this.props;

    const data = {
      bookmark_id:bookmark_id,
      name: name,
    };


    const actions =[
      <RaisedButton
        label="友達を追加"
        primary={true}
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          requestAddPermission(data)
        }}
      />
    ];

    return (

      <RaisedButton
        label="友達を招待する"
        onTouchTap={() => openDialog()}
      >
        <Dialog
          title="友達のユーザーIDを入力してください"
          actions={actions}
          open={open}
          onRequestClose={() => closeDialog()}
        >
            <TextField
              floatingLabelText="ユーザーID"
              floatingLabelFixed={true}
              type="text"
              errorText={error_message}
              onChange={(e) => changeUserName(e.target.value)}
            />
        </Dialog>
      </RaisedButton>
    )
  }
}
