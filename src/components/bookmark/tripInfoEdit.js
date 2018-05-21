/**
 * Created by tomino on 18/05/14.
 */
import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


export default class TripInfoDialog extends React.Component {

  render() {
    const {
      open,
      requestTripInfoEdit,
      changeDescription,
      closeDialog,
      bookmark_id,
      info_id,
      description,
      initDescription,
    } = this.props;

    let data = {
      bookmark_id:bookmark_id,
      info_id:info_id,
      description:description,
    };

    const actions =[
      <RaisedButton
        label="変更"
        primary={true}
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          requestTripInfoEdit(data)
        }}
      />
    ];

    return (
        <Dialog
          title="イベントを編集"
          actions={actions}
          open={open}
          onRequestClose={() => closeDialog()}
        >
            <TextField
              floatingLabelText="説明文"
              floatingLabelFixed={true}
              type="text"
              fullWidth={true}
              defaultValue={initDescription}
              multiLine={true}
              rows={4}
              rowsMax={7}
              onChange={(e) => changeDescription(e.target.value)}
            />
            <br/>
        </Dialog>
    );
  }
}
