/**
 * Created by tomino on 18/05/11.
 */
import React from 'react';
import { compose } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const MapWithAMarker = compose(
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: props.trip_info_map[0].location.location[0], lng: props.trip_info_map[0].location.location[1] }}
  >
    {
      props.trip_info_map.map((item,i) =>
        <Marker
          key={i}
          position={{
            lat: item.location.location[0],
            lng: item.location.location[1]
          }}
        />
      )
    }
  </GoogleMap>

);

export default MapWithAMarker;

