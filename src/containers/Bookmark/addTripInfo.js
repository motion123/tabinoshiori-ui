/**
 * Created by tomino on 18/05/12.
 */
import React from 'react'
import { connect } from 'react-redux'
import addTripInfo from '../../components/bookmark/addTripInfo'
import * as bookmarkAction from '../../actions/bookmark'

function mapStateToProps(state) {
  return {
    isFetching: state.addTripInfo.isFetching,
    lat:state.addTripInfo.lat,
    lng:state.addTripInfo.lng,
    site_name:state.addTripInfo.site_name,
    description:state.addTripInfo.description,
  }
}

// clickでactionを飛ばず
function mapDispatchToProps(dispatch) {
  return {
    requestAddTripInfo: (data) =>{
      dispatch(bookmarkAction.requestAddTripInfo(data))
    },
    changeLat:(data) => {
      dispatch(bookmarkAction.changeLat(data))
    },
    changeLng:(data) => {
      dispatch(bookmarkAction.changeLng(data))
    },
    changeTripInfoDesc:(data) => {
      dispatch(bookmarkAction.changeTripInfoDesc(data))
    },
    changeSiteName:(data) => {
      dispatch(bookmarkAction.changeSiteName(data))
    }
  }
}


//connect関数でReduxとReactコンポーネントを繋ぐ
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(addTripInfo)
