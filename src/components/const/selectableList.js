/**
 * Created by tomino on 17/03/06.
 */
import React from 'react';
import {List, ListItem,makeSelectable} from 'material-ui/List';

let Selectable = makeSelectable(List);

export default class SelectableList extends React.Component {

    render() {
      const  {
        onSelect,
        selectIndex,
      } = this.props;

      return (
        <Selectable
          value={selectIndex}
          onChange={onSelect}
        >
          {this.props.children}
        </Selectable>
      );
    }
}

