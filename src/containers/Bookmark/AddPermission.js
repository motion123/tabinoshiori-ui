/**
 * Created by tomino on 18/05/14.
 */
import React from 'react'
import { connect } from 'react-redux'
import AddPermission from '../../components/bookmark/addPermission'
import * as bookmarkAction from '../../actions/bookmark'

function mapStateToProps(state) {
  return {
    isFetching: state.addPermission.isFetching,
    name:state.addPermission.name,
    open:state.addPermission.open,
    error_message:state.addPermission.error_message,
  }
}

// clickでactionを飛ばず
function mapDispatchToProps(dispatch) {
  return {
    requestAddPermission: (data) => {
      dispatch(bookmarkAction.requestAddPermission(data))
    },
    changeUserName:(data) => {
      dispatch(bookmarkAction.changeUserName(data))
    },
    openDialog: () => {
      dispatch(bookmarkAction.openAddPerDialog())
    },
    closeDialog: () => {
      dispatch(bookmarkAction.closeAddPerDialog())
    }
  }
}


//connect関数でReduxとReactコンポーネントを繋ぐ
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPermission)
