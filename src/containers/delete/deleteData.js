/**
 * Created by tomihei on 17/04/03.
 */
import React from 'react'
import { connect } from 'react-redux'
import Delete from '../../components/const/delete'
import * as deleteData from '../../actions/deleteData'

function mapStateToProps(state) {
  return {
    url: state.deleteData.url,
    open:state.deleteData.open,
    isFetching: state.deleteData.isFetching,
  }
}

// clickでactionを飛ばず
function mapDispatchToProps(dispatch) {
  return {
    closeDialog: () => {
      dispatch(deleteData.closeDialog())
    },
    requestDelete: (url) => {
      dispatch(deleteData.deleteDataRequest(url))
    },
  }
}


//connect関数でReduxとReactコンポーネントを繋ぐ
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Delete)
