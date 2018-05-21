/**
 * Created by tomino on 18/05/14.
 */
import React from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';


export default class deleteTripInfo extends React.Component {

  render() {
    const {
      open,
      requestDeleteTripInfo,
      closeDialog,
      bookmark_id,
      info_id,
    } = this.props;

    let data = {
      bookmark_id:bookmark_id,
      info_id:info_id
    };

    const actions =[
      <RaisedButton
        label="削除"
        secondary={true}
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          requestDeleteTripInfo(data)
        }}
      />
    ];

    return (
      <Dialog
        title="削除してもよろしいですか?"
        actions={actions}
        open={open}
        onRequestClose={() => closeDialog()}
      >
      </Dialog>
    );
  }
}
