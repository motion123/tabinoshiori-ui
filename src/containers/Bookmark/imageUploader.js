/**
 * Created by tomino on 18/05/14.
 */
import React from 'react'
import { connect } from 'react-redux'
import ImageUploader from '../../components/const/ImageUploader'
import * as tripInfoAction from '../../actions/tripinfo'

function mapStateToProps(state) {
  return {
    isFetching: state.imageUploader.isFetching,
  }
}

// clickでactionを飛ばず
function mapDispatchToProps(dispatch) {
  return {
    requestImageUpload: (data,trip_info) =>{
      dispatch(tripInfoAction.requestImageUpdate(data,trip_info))
    }
  }
}


//connect関数でReduxとReactコンポーネントを繋ぐ
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageUploader)
