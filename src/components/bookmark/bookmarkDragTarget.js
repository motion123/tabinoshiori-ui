/**
 * Created by tomino on 18/05/11.
 */
import React from 'react';
import {DropTarget,DragSource} from 'react-dnd';
import flow from 'lodash/flow';


function collectsource(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  }
}

export const ItemTypes = {
  ITEM: 'item'
};

const DragSource1 = {
  beginDrag(props) {
    console.log(props);
    return {props};
  }
};

function targetcollect(connect,monitor){
  return {
    connectDropTarget: connect.dropTarget(),
  }
}

const Target1 = {
  drop(hoverProps,monitor,hoverComponent){
    let dragProps = monitor.getItem();
    if(hoverProps.id === dragProps.props.id){
      return
    }
    hoverProps.trip_exchange(hoverProps.index,dragProps.props.index);
  }
};

class Item extends React.Component{
  render(){
    return this.props.connectDragSource(this.props.connectDropTarget(
      <li>
        {this.props.children}
      </li>
    ))
  }
}

export default flow(
  DragSource(ItemTypes.ITEM, DragSource1, collectsource),
  DropTarget(ItemTypes.ITEM, Target1, targetcollect)
)(Item);

