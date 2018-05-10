/**
 * Created by tomihei on 17/02/15.
 */
import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import styles from './loading.css';


export default class Loading extends React.Component {

  render() {
    return (
      <div className={styles.loader}>
        <CircularProgress size={90} thickness={7} />
      </div>
    );
  }
}
