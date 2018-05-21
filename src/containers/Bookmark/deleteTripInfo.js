/**
 * Created by tomino on 18/05/14.
 */
import React from 'react'
import { connect } from 'react-redux'
import DeleteTripInfo from '../../components/bookmark/deleteTripInfo'
import * as tripInfoAction from '../../actions/tripinfo'

function mapStateToProps(state) {
  return {
    isFetching: state.deleteTripInfo.isFetching,
    open:state.deleteTripInfo.open,
    info_id:state.deleteTripInfo.info_id,
  }
}

// clickでactionを飛ばず
function mapDispatchToProps(dispatch) {
  return {
    requestDeleteTripInfo: (data) =>{
      dispatch(tripInfoAction.requestDeleteTripInfo(data))
    },
    closeDialog: () => {
      dispatch(tripInfoAction.closeDeleteDialog())
    }
  }
}


//connect関数でReduxとReactコンポーネントを繋ぐ
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteTripInfo)
