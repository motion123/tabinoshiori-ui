/**
 * Created by tomihei on 17/02/15.
 */
import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Snackbar from '../../containers/addVideo/snackbar';
import SearchForm from '../../containers/search/search';
import styles from './header.css';

const HeaderMenu = ({onClickSignOut}) => (
      <div>
      <IconMenu
        iconButtonElement={
          <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem
          primaryText="Sign out"
          onTouchTap={(e) => {
            e.preventDefault();
            onClickSignOut();
            }
          }
        />
      </IconMenu>
      </div>
);




export default class Header extends React.Component {

  render() {
    const {children, onLoggedOut} = this.props;
    return (
      <div className={styles.contentbody}>
        <div className={styles.flexContainer}>
          <div className={styles.title}>
            TEST
          </div>
          <SearchForm/>
          <div className={styles.iconmenu}>
            <HeaderMenu
             onClickSignOut = {() => {onLoggedOut()}}
            />
          </div>
        </div>
        <Snackbar/>
        {children}
      </div>
    );
  }
}
