/**
 * Created by tomino on 18/05/13.
 */
import * as AppType from '../constants/App';


export function openEditDialog(data,description){
  return{
    type:AppType.TRIP_EDIT_DIALOG_OPEN,
    data:data,
    description:description
  }
}

export function closeEditDialog(){
  return{
    type:AppType.TRIP_EDIT_DIALOG_CLOSE,
  }
}

export function changeTripInfo(data) {
  return{
    type:AppType.CHANGE_TRIP_INFO,
    data:data,
  }
}

export function requestEditTripInfo(data) {
  return{
    type:AppType.TRIP_INFO_EDIT_REQUEST,
    data:data,
  }
}

export function resultEditTripInfo(data) {
  return{
    type:AppType.TRIP_INFO_EDIT_RESULT,
    data:data,
  }

}

export function failedEditTripInfo(data) {
  return{
    type:AppType.TRIP_INFO_EDIT_FAILED,
    data:data,
  }
}

export function requestDeleteTripInfo(data) {
  return{
    type:AppType.TRIP_INFO_DELETE_REQUEST,
    data:data,
  }
}

export function resultDeleteTripInfo(data) {
  return{
    type:AppType.TRIP_INFO_DELETE_RESULT,
    data:data,
  }
}

export function failedDeleteTripInfo(data) {
  return{
    type:AppType.TRIP_INFO_DELETE_FAILED,
    data:data
  }
}

export function openDeleteDialog(data) {
  return{
    type:AppType.TRIP_DELETE_DIALOG_OPEN,
    data:data,
  }
}

export function closeDeleteDialog() {
  return{
    type:AppType.TRIP_DELETE_DIALOG_CLOSE,
  }
}


export function requestImageUpdate(data,trip_info) {
  return{
    type:AppType.TRIP_IMAGE_UPDATE_REQUEST,
    data:data,
    trip_info:trip_info,
  }
}

export function resultImageUpdate(data,trip_info) {
  return {
    type:AppType.TRIP_IMAGE_UPDATE_RESULT,
    data:data,
    trip_info:trip_info,
  }
}

export function failedImageUpdate() {
  return {
    type:AppType.TRIP_IMAGE_UPDATE_FAILED,
  }
}
