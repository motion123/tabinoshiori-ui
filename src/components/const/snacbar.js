/**
 * Created by tomihei on 17/03/27.
 */
import React from 'react';
import Snackbar from 'material-ui/Snackbar';


export default class Snack extends React.Component {

  render() {
    const  {
      open,
      closeSnackbar,
      message,
    } = this.props;


    return (
      <Snackbar
        open={open}
        message={message}
        autoHideDuration={5000}
        onRequestClose={() => closeSnackbar()}
      />
    );
  }
}
