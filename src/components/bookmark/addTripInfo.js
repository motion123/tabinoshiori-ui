/**
 * Created by tomino on 18/05/12.
 */
import React from 'react';
import * as Root from '../../constants/root';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import SearchMap from './SearchMap';
import Dialog from 'material-ui/Dialog';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import styles from './addTripInfo.css';
import ContentAdd from 'material-ui/svg-icons/content/add';


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
      openDialog,
      closeDialog,
      open,
    } = this.props;

    const data = {
      _id:_id,
      site_name: site_name,
      description:description,
      location: [lat,lng]
    };

    const actions =[
        <RaisedButton
          label="追加"
          primary={true}
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            requestAddTripInfo(data)
          }}
        />
    ];

    return (

    <FloatingActionButton
      onTouchTap={() => openDialog()}
      className={styles.float}
    >
      <ContentAdd/>
      <Dialog
        title="イベントを追加"
        autoScrollBodyContent={true}
        actions={actions}
        open={open}
        onRequestClose={() => closeDialog()}
      >

          <form>
            <SearchMap
              onChangeSiteName={changeSiteName}
              onChangeLat={changeLat}
              onChangeLng={changeLng}
            />

            <TextField
              floatingLabelText="観光地名"
              floatingLabelFixed={true}
              type="text"
              value={site_name}
              onChange={(e) => changeSiteName(e.target.value)}
              fullWidth={true}
            />
            <br/>
            <TextField
              floatingLabelText="内容"
              floatingLabelFixed={true}
              multiLine={true}
              rows={4}
              rowsMax={7}
              onChange={(e) => changeTripInfoDesc(e.target.value)}
              fullWidth={true}
            />
            <br/>
          </form>
      </Dialog>
    </FloatingActionButton>
    )
  }
}
