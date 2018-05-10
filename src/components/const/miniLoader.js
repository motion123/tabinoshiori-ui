/**
 * Created by tomihei on 17/03/29.
 */
import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import styles from './loading.css';


export default class MiniLoader extends React.Component {


  render() {
    const {size} = this.props;
    return (
      <div className={styles.miniloader}>
        <CircularProgress size={size} thickness={7} />
      </div>
    );
  }
}
