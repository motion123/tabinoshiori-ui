/**
 * Created by tomino on 18/05/13.
 */
import React from 'react'
import { connect } from 'react-redux'
import tripInfoEdit from '../../components/bookmark/tripInfoEdit'
import * as tripInfoAction from '../../actions/tripinfo'

function mapStateToProps(state) {
  return {
    isFetching: state.tripInfoEdit.isFetching,
    description:state.tripInfoEdit.description,
    open:state.tripInfoEdit.open,
    info_id:state.tripInfoEdit.info_id,
    initDescription:state.tripInfoEdit.initDescription,
  }
}

// clickでactionを飛ばず
function mapDispatchToProps(dispatch) {
  return {
    requestTripInfoEdit: (data) =>{
      dispatch(tripInfoAction.requestEditTripInfo(data))
    },
    changeDescription:(data) => {
      dispatch(tripInfoAction.changeTripInfo(data))
    },
    closeDialog: () => {
      dispatch(tripInfoAction.closeEditDialog())
    }
  }
}


//connect関数でReduxとReactコンポーネントを繋ぐ
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(tripInfoEdit)
