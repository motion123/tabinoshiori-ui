/**
 * Created by tomihei on 17/06/21.
 */
import React from 'react'
import styles from './searchForm.css';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import SearchIcon from 'material-ui/svg-icons/action/search';
import {grey600} from 'material-ui/styles/colors';
import { push } from 'react-router-redux';

export default class SearchForm extends React.Component {
  sendCommand(e) {
    var ENTER = 13;
    if (e.keyCode == ENTER) {
      this.props.pushHistory(this.props.word);
      e.preventDefault();
    }
  }
  render() {
    const {
      changeWord,
      word,
      initSearchList,
      pushHistory
    } = this.props;


    return (
      <div className={styles.searchBox}>
        <form className={styles.form}>
          <div className={styles.formbox}>
            <input
              className={styles.input}
              placeholder="検索"
              type="text"
              onKeyDown={(e) => this.sendCommand(e)}
              onChange={(e) => changeWord(e.target.value)}
              onFocus={() => initSearchList()}
            />
            <div className={styles.button}>
            <IconButton
              onTouchTap={() => pushHistory(this.props.word)}
            >
              <SearchIcon color={grey600}/>
            </IconButton>
            </div>
            </div>
        </form>
      </div>
    )
  }
}
