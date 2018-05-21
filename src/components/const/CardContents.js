/**
 * Created by tomihei on 17/04/01.
 */
import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import {Link} from 'react-router';
import styles from './CardContents.css';
import FollowButton from '../../containers/follow/followRequest';

export default class bookmarkList extends React.Component {

  render() {
    const {
      bookmarkList,
      onAdmin,
    } = this.props;

    let item = [];

    bookmarkList.map((bookmark,index) =>
      item.push (
        <Col
          key={bookmark._id + index}
          xs={12}
          sm={4}
          md={3}
          lg={2}
          className={styles.Col}
        >
          <div className={styles.content}>
            <Link to={"/bookmark/"+ bookmark._id}>

              <img
                src={bookmark.thumbnail}
                className={styles.thumbnail}
              />
              <div className={styles.back}>
              <div className={styles.titlebox}>
                <div className={styles.box}>
                  <div className={styles.title}>
                    {bookmark.title}
                  </div>
                </div>
              </div>
                </div>
            </Link>
          </div>
        </Col>
      )
    );


    return (
          <Row
            className={styles.Row}
          >
              {item}
          </Row>

    );
  }
}
