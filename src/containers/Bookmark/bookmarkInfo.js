/**
 * Created by tomino on 18/05/10.
 */
import React from 'react'
import { connect } from 'react-redux'
import bookmarkInfo from '../../components/bookmark/bookmarkInfo'
import * as bookmarkAction from '../../actions/bookmark'
import * as tripinfoAction from '../../actions/tripinfo';

function mapStateToProps(state) {
  return {
    isFetching: state.bookmarkInfo.isFetching,
    bookmark: state.bookmarkInfo.bookmark,
    trip_info:state.bookmarkInfo.trip_info,

  }
}

function mapDispatchToProps(dispatch) {
  return {
    requestInfo: (data) =>{
      dispatch(bookmarkAction.bookmarkInfoRequest(data))
    },
    exchangeTripInfo: (aId,bId) => {
      dispatch(bookmarkAction.bookmarkTripInfoExchange(aId,bId))
    },
    requestChangeTripInfo: (data) => {
      dispatch(bookmarkAction.requestChangeTripInfo(data))
    },
    openEditDialog: (data,description) => {
      dispatch(tripinfoAction.openEditDialog(data,description))
    },
    openDeleteDialog: (data) => {
      dispatch(tripinfoAction.openDeleteDialog(data))
    }
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(bookmarkInfo)
