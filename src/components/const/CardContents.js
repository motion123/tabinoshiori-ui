/**
 * Created by tomihei on 17/04/01.
 */
import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import {Link} from 'react-router';
import styles from './CardContents.css';
import FollowButton from '../../containers/follow/followRequest';

export default class BoardList extends React.Component {

  render() {
    const {
      boardList,
      onAdmin,
    } = this.props;

    let item = [];

    boardList.map((board) =>
      item.push (
        <Col
          key={board._id}
          xs={12}
          sm={4}
          md={3}
          lg={2}
          className={styles.Col}
        >
          <div className={styles.content}>
            <Link to={"/user/"+ board.user_id + "/" + board._id}>

              <img
                src={board.img}
                className={styles.img}
              />
              <div className={styles.back}>
              <div className={styles.titlebox}>
                <div className={styles.box}>
                  <div className={styles.title}>
                    {board.title}
                  </div>
                  <div className={styles.subtitle}>
                    {board.count + "メディア"}
                  </div>
                </div>
              </div>
                </div>
            </Link>
            {
              onAdmin ? (null):(<FollowButton
              isBoard={true}
              boardId={board._id}
              userId={board._user}
            />)
            }
          </div>
        </Col>
      )
    );


    return (
          <Row className={styles.Row}>
              {item}
          </Row>

    );
  }
}
