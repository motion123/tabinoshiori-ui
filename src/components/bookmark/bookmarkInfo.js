/**
 * Created by tomino on 18/05/10.
 */
import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import styles from './scss/bookmarkInfo.css';
import Loading from '../const/loading';
import TripList from './bookmarkTripList';
import Map from './map';
import AddTripInfo from '../../containers/Bookmark/addTripInfo';
import TripInfoEditDialog from '../../containers/Bookmark/tripinfoedit';
import DeleteTripInfoDialog from '../../containers/Bookmark/deleteTripInfo';
import AddPermission from '../../containers/Bookmark/AddPermission';
import PermissionList from '../../containers/Bookmark/PermissionList';

export default class UserInfo extends React.Component {

  componentWillMount() {
    this.props.requestInfo(this.props.params.bookmarkId)
  }

  componentWillReceiveProps(nextProps){
    if (this.props.params.bookmarkId != nextProps.params.bookmarkId){
      this.props.requestInfo(nextProps.params.bookmarkId)
    }
  }

  render() {
    const {
      params,
      isFetching,
      bookmark,
      exchangeTripInfo,
      trip_info,
      openEditDialog,
      openDeleteDialog,
      requestChangeTripInfo,
    } = this.props;

    return isFetching ? (<Loading />):(
            <section>
                <div className={styles.titleBox}>
                  <div>
                    <div className={styles.wordBox}>
                     <h1>{bookmark.title}</h1>
                    </div>
                    <div className={styles.wordBox}>
                      <h2>{bookmark.description}</h2>
                    </div>
                  </div>
                  <div className={styles.imgBox}>
                    <img src={bookmark.thumbnail}/>
                  </div>
                  <div className={styles.permissionBox}>
                     <div className={styles.buttonBox}>
                      <AddPermission
                        bookmark_id={bookmark._id}
                      />
                     </div>
                    <div className={styles.buttonBox}>
                      <PermissionList
                        onMobile={true}
                        bookmark_id={bookmark._id}
                        otherUser={bookmark.otherUser}
                      />
                    </div>
                  </div>

                </div>
                <TripInfoEditDialog
                  bookmark_id={bookmark._id}
                />
                <DeleteTripInfoDialog
                  bookmark_id={bookmark._id}
                />
              <div className={styles.tripList}>

                <div className={styles.box1}>
                <PermissionList
                onMobile={false}
                bookmark_id={bookmark._id}
                otherUser={bookmark.otherUser}
                />
                </div>
                { trip_info.length > 0 ?
                  <div className={styles.box2}>
                  <TripList
                    bookmarkId={bookmark._id}
                    trip_info={trip_info}
                    trip_exchange={exchangeTripInfo}
                    requestChangeTripInfo={requestChangeTripInfo}
                    openEditDialog={openEditDialog}
                    openDeleteDialog={openDeleteDialog}
                  />
                  <Map
                    trip_info_map={trip_info}
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDAKPblvEWtasMJ-onhSesCJ4SbjwEaE9g&v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{height: `100%`,width: '100%'}}/>}
                    containerElement={<div style={{height: `400px`,width: '100%'}}/>}
                    mapElement={<div style={{height: `100%`, width: '100%'}}/>}
                  />
                  </div>:

                  <div className={styles.box2}>
                    <span>イベント情報がありません</span>
                  </div>
                }
              </div>
                <AddTripInfo
                  _id={bookmark._id}
                />
            </section>
      )
  }
}

