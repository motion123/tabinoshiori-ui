/**
 * Created by tomino on 18/05/10.
 */
import React from 'react'
import * as Root from '../../constants/root';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import styles from './createBookmark.css';

export default class CreateBookmarkForm extends React.Component {

  render() {
    const {
      changeTitle,
      changeDescription,
      createRequest,
      isFetching,
      title,
      description,
      message
    } = this.props;

    let data = {
      title : title,
      description:description,
    };

    return (
      <div className={styles.box}>
        <form >
          <div>
              <TextField
                floatingLabelText="しおりのたいとる"
                type="text"
                onChange={(e) => changeTitle(e.target.value)}
                disabled={isFetching}
                errorText={message.title}
              >
              </TextField>

          </div>
          <div>
              <TextField
                floatingLabelText="しおりの説明"
                type="text"
                onChange={(e) => changeDescription(e.target.value)}
                disabled={isFetching}
                row={3}
                errorText={message.description}
              >
              </TextField>

          </div>
        </form>
        <div className={styles.buttonBox}>
          <FlatButton
            label="送信"
            primary={true}
            onTouchTap={() => createRequest(data)}
            disabled={isFetching}
          />
        </div>
      </div>
    )
  }
}
