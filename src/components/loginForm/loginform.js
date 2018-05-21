/**
 * Created by tomihei on 17/02/11.
 */
import React from 'react'
import * as Root from '../../constants/root';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import styles from './loginform.css';

export default class LoginForm extends React.Component {

  render() {
    const {
      form,
      loginInfo,
      onNewUser,
      onSubmitReq,
      newUser,
      changeName,
      changeEmail,
      changePassword
    } = this.props;

    const {message} = loginInfo;

    const NameForm = newUser ? (
      <div>
        <TextField
          floatingLabelText="ユーザー名"
          floatingLabelFixed={true}
          errorText={message.name}
          type="text"
          onChange={(e) => changeName(e.target.value)}
        />
        <br/>
      </div>
    ) : null;
    const newUserButton = newUser ? null : (
      <FlatButton
        label="新規登録"
        secondary={true}
        className={styles.button}
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          onNewUser();
        }}
      />
    );
    return (
      <div className={styles.parent}>
        <Paper className={styles.contents}>
            <form className={styles.form}>
              {NameForm}
              <TextField
                floatingLabelText="メールアドレス"
                floatingLabelFixed={true}
                errorText={message.email}
                type="email"
                onChange={(e) => changeEmail(e.target.value)}
              />
              <br/>
              <TextField
                floatingLabelText="パスワード"
                floatingLabelFixed={true}
                errorText={message.password}
                type="password"
                onChange={(e) => changePassword(e.target.value)}
              />
              <br/>

              <div className={styles.buttonDiv}>
                <RaisedButton
                  label={form.buttonLabel}
                  primary={true}
                  type="submit"
                  className={styles.button}
                  onClick={(e) => {
                    e.preventDefault();
                    onSubmitReq(form);
                  }}
                />
              </div>
              <div className={styles.buttonDiv}>
                {newUserButton}
              </div>
            </form>
        </Paper>
      </div>
    )
  }
}
