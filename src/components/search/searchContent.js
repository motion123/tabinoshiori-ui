/**
 * Created by tomino on 17/07/01.
 */
import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import AddVideoIcon from '../../containers/video/addVideoIcon';
import {Link} from 'react-router';
import styles from './searchContent.css';
import Paper from 'material-ui/Paper';
import ContentDelete from '../../containers/board/videoDelete';

export default class SearchContents extends React.Component {


  render() {
    const {
      videoList,
      auth,
    } = this.props;

    let item = [];

    videoList.map((video) =>
      item.push (
        <Col
          key={video._id}
          xs={12}
          sm={4}
          md={3}
          lg={2}
          className={styles.Col}
        >
          <Paper zDepth={1}>
            <div>
              <Link to={"/media/" + video._id}>
                <div className={styles.content}>

                  <img
                    src={video.thumbnail}
                    className={styles.img}
                  />

                </div>
              </Link>

              <div>
                <div className={styles.box}>
                  <div className={styles.title}>
                    <Link className={styles.atagtitle} to={"/media/" + video.video_id}>

                      {video.title}
                    </Link>
                  </div>
                  <div className={styles.description}>
                    <Link className={styles.atagdescription} to={"/media/" + video.video_id}>

                      {video.description}
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <hr className={styles.sen}/>

                <AddVideoIcon
                  urlId={video.url_id}
                  pattern={video.pattern}
                  title={video.title}
                  description={video.description}
                />
                {auth ? (<ContentDelete
                    inBoardId={video._id}
                  />): (null)}
              </div>
            </div>
          </Paper>
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
