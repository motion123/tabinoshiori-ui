/**
 * Created by tomihei on 17/03/27.
 */
import React from 'react'
import { connect } from 'react-redux'
import Snackbar from '../../components/const/snacbar';
import * as SnackbarAction from '../../actions/snacbar'

function mapStateToProps(state) {
  return {
    message: state.snackbar.message,
    open: state.snackbar.open,
  }
}

// clickでactionを飛ばず
function mapDispatchToProps(dispatch) {
  return {
    closeSnackbar: () => {
      dispatch(SnackbarAction.closeSnackbar())
    },
  }
}


//connect関数でReduxとReactコンポーネントを繋ぐ
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Snackbar)
