/**
 * Created by tomihei on 17/04/01.
 */
import React from 'react';
import BoardList from '../../containers/board/boardList';
import NewBoard from '../../containers/board/newBoard';
import styles from './userBoard.css';
import FlatButton from 'material-ui/FlatButton';


export default class AddVideo extends React.Component {

  render() {
    const {
      params,
      userHandleId,
      openDialog,
      user,
    } = this.props;

    const userId = params.userId;

    return (

      <div>

        <div className={styles.border}>
        <div className={styles.box}>
          <h2 className={styles.board}>ボード一覧</h2>
            {params.userId == userHandleId ? (<div>
              <FlatButton
              label="ボードを作成する"
              primary={true}
              className={styles.new}
              onTouchTap={() => openDialog()}
            />
            <NewBoard/>
            </div>
            ) :(null)
            }
        </div>
          </div>

        <div className={styles.boardback}>
        <BoardList
          userId={userId}
          card={true}
          window={true}
          onAdmin={params.userId == userHandleId}
        />
          </div>
       </div>
    );
  }
}
