/**
 * Created by tomino on 18/05/10.
 */
import React from 'react';
import {DragDropContext,DropTarget,DragSource} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Item from './bookmarkDragTarget';

class TripList extends React.Component{
  constructor(props){
    super(props);

  }

  componentWillReceiveProps(nextProps) {
    if(this.props.trip_info !== nextProps.trip_info){
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
    } = this.props;

    return(
      <ul>
        {
          trip_info.map((item,i) =>
            <Item
              trip_exchange={trip_exchange}
              id={item._id}
              index={i}
              key={i}
            >
              <div>
                <h4>{item.location.site_name}</h4>
              </div>
              <div>
                <span>{item.description}</span>
              </div>
            </Item>
          )
        }
      </ul>
    )
  }
}


export default DragDropContext(HTML5Backend)(TripList);
