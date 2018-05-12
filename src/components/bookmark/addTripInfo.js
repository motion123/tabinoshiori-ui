/**
 * Created by tomino on 18/05/12.
 */
import React from 'react';
import * as Root from '../../constants/root';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';

export default class AddTripInfo extends React.Component {

  render() {
    const {
      site_name,
      lat,
      lng,
      _id,
      description,
      isFetching,
      requestAddTripInfo,
      changeLat,
      changeLng,
      changeTripInfoDesc,
      changeSiteName,
    } = this.props;

    const data = {
      _id:_id,
      site_name: site_name,
      description:description,
      location: [lat,lng]
    };

    return (
          <form>
            <TextField
              floatingLabelText="観光地名"
              floatingLabelFixed={true}
              type="text"
              onChange={(e) => changeSiteName(e.target.value)}
            />
            <br/>
            <TextField
              floatingLabelText="内容"
              floatingLabelFixed={true}
              type="text"
              onChange={(e) => changeTripInfoDesc(e.target.value)}
            />
            <br/>
            <TextField
              floatingLabelText="Lat"
              floatingLabelFixed={true}
              type="number"
              onChange={(e) => changeLat(e.target.value)}
            />
            <br/>
            <TextField
              floatingLabelText="Lng"
              floatingLabelFixed={true}
              type="number"
              onChange={(e) => changeLng(e.target.value)}
            />
            <br/>

            <div>
              <RaisedButton
                label="追加"
                primary={true}
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  requestAddTripInfo(data)
                }}
              />
            </div>
          </form>
    )
  }
}
