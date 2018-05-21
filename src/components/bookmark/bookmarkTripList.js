/**
 * Created by tomino on 18/05/10.
 */
import React from 'react';
import {DragDropContext,DropTarget,DragSource} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Item from './bookmarkDragTarget';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import EditImage from 'material-ui/svg-icons/image/edit';
import DeleteImage from 'material-ui/svg-icons/action/delete-forever';
import ImageUploader from '../../containers/Bookmark/imageUploader';
import styles from './scss/bookmarkTripList.css';
import {grey400} from 'material-ui/styles/colors';

class TripList extends React.Component{
  constructor(props){
    super(props);

  }


  replaceEnter(str){
    return str.split('\n').map((line) => {
      return <p>{line}</p>
    });
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.trip_info !== nextProps.trip_info && nextProps.trip_info[0] !== null){
      let data = {
        trip_info_list: nextProps.trip_info,
        _id:this.props.bookmarkId
      };
      this.props.requestChangeTripInfo(data);
    }
  }

  render(){
    const {
      trip_info,
      trip_exchange,
      openEditDialog,
      openDeleteDialog,
      bookmarkId,
    } = this.props;


    return(
      <ul className={styles.bookmarkList_ul}>
        {
          trip_info.map((item,i) =>
            <Item
              trip_exchange={trip_exchange}
              id={item._id}
              index={i}
              key={i}
            >
              <div className={styles.line}></div>
              <div className={styles.bookmarkList_box1}>
                <div className={styles.bookmarkList_content}>
                  <div className={styles.contentBox}>
                    <div>
                      <h4 className={styles.siteName}>{item.location.site_name}</h4>
                    </div>
                    <div>
                      <span>{this.replaceEnter(item.description)}</span>
                    </div>
                  </div>
                  <div className={styles.bookmarkList_button}>
                    <IconButton
                      onTouchTap={() => openEditDialog(item._id,item.description)}
                    >
                      <EditImage color={grey400}/>
                    </IconButton>
                    <IconButton
                      onTouchTap={() => openDeleteDialog(item._id)}
                    >
                      <DeleteImage color={grey400}/>
                    </IconButton>
                  </div>
                </div>
              </div>
              <div className={styles.bookmarkList_box2}>
                {item.thumbnail.length === 0 ? (
                    <ImageUploader
                      bookmark_id={bookmarkId}
                      description={item.description}
                      info_id={item._id}
                    />
                  ) : (
                    <div className={styles.infoImage_box}>
                      <img className={styles.image} src={item.thumbnail[0].large}/>
                    </div>
                  )}
              </div>
            </Item>
          )
        }
      </ul>
    )
  }
}


export default DragDropContext(HTML5Backend)(TripList);
