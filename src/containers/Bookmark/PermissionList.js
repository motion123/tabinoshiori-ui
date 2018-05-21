/**
 * Created by tomino on 18/05/15.
 */
import React from 'react'
import { connect } from 'react-redux'
import PermissionList from '../../components/bookmark/permissionList'
import * as bookmarkAction from '../../actions/bookmark'

function mapStateToProps(state) {
  return {
    isFetching: state.permissionList.isFetching,
    name:state.permissionList.name,
    open:state.permissionList.open,
  }
}

// clickでactionを飛ばず
function mapDispatchToProps(dispatch) {
  return {
    requestDelPermission: (bookmark_id,user_id) => {
      dispatch(bookmarkAction.requestDelPermission(bookmark_id,user_id))
    },
    openDialog: () => {
      dispatch(bookmarkAction.openDelPerDialog())
    },
    closeDialog: () => {
      dispatch(bookmarkAction.closeDelPerDialog())
    }
  }
}


//connect関数でReduxとReactコンポーネントを繋ぐ
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PermissionList)
