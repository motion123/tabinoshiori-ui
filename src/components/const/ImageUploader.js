/**
 * Created by tomino on 18/05/14.
 */
import React from 'react';
import styles from './ImageUploader.css';
import Loading from '../const/loading';

export default class ImageUploader extends React.Component {

  fileLoader(file) {
    let type = file.type;
    if ( type !== 'image/jpeg' ) {
      alert('選択できるファイルはJPEG画像だけです。');
      file.value = '';
    }else{
      const data = {
        bookmark_id:this.props.bookmark_id,
        info_id:this.props.info_id,
        description:this.props.description,
        thumbnail:{
          small:"",
          medium:"",
          large:"",
        }
      };

      let fr=new FileReader();
      fr.readAsDataURL(file);
      fr.onload = (evt) => {
        let base64 = evt.target.result.replace('data:image/jpeg;base64,', '');
        this.props.requestImageUpload(base64,data);
      }
    }
  }

  render() {
    const {
      bookmark_id,
      info_id,
      description,
      isFetching,
    } = this.props;


    return (
      <div className={styles.image_box}>
        {isFetching ?
          <div className={styles.loading}>
          <Loading/>
          </div>  :
          <label className={styles.image} htmlFor={"upload" + info_id}>
            <span>写真を選択</span>
            <input type="file" className={styles.imageInput} id={"upload" + info_id}
                   onChange={(e) => this.fileLoader(e.target.files[0])}/>
          </label>
        }
      </div>
    )
  }
}
