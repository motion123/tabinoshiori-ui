/**
 * Created by tomihei on 17/02/10.
 */
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Loading from '../const/loading';

export default class App extends React.Component {
  componentWillMount() {
    this.props.checkLogin();
  }

  render() {
    const {isPrepared, children} = this.props;

    return isPrepared ? (
      <MuiThemeProvider  >
        <div>
            {children}
        </div>
      </MuiThemeProvider>):
      (<MuiThemeProvider >
        <Loading/>
      </MuiThemeProvider>);
  }
}
