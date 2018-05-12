/**
 * Created by tomino on 18/05/10.
 */
import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import styles from './bookmarkInfo.css';
import Loading from '../const/loading';
import TripList from './bookmarkTripList';
import Map from './map';
import AddTripInfo from '../../containers/Bookmark/addTripInfo';
import SearchMap from './SearchMap';

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
      requestChangeTripInfo,
    } = this.props;

    return isFetching ? (<Loading />):(
        <Grid fluid className={styles.Grid}>
            <div>
              <h1>{bookmark.title}</h1>
              <h2>{bookmark.description}</h2>
              <TripList
                bookmarkId={bookmark._id}
                trip_info={trip_info}
                trip_exchange={exchangeTripInfo}
                requestChangeTripInfo={requestChangeTripInfo}
              />
              <Map
                trip_info_map={trip_info}
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDAKPblvEWtasMJ-onhSesCJ4SbjwEaE9g&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
              />
              <SearchMap/>
              <AddTripInfo
                _id={bookmark._id}
              />
            </div>
        </Grid>
      )
  }
}

