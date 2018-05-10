/**
 * Created by tomihei on 17/06/04.
 */
import React from 'react';
import styles from './scrollMenu.css';

export default class scrollMenu extends React.Component {

  constructor(props){
    super(props);
    this.scrollListener = this.scrollListener.bind(this);

  }

  componentWillMount(){
    this.props.init();
  }


  componentDidMount(){
    this.attachScrollListener();
    this.initHeight = document.getElementById("scrollMenu").getBoundingClientRect().top;
    this.height = document.getElementById("scrollMenu").scrollHeight;
  }

  componentWillUnmount(){
    this.detachScrollLister();
  }

  detachScrollLister(){
    let scrollEl = window;
    scrollEl.removeEventListener('scroll', this.scrollListener);
    scrollEl.removeEventListener('resize', this.scrollListener);
  }

  attachScrollListener(){
    let scrollEl = window;
    scrollEl.addEventListener('scroll', this.scrollListener);
    scrollEl.addEventListener('resize', this.scrollListener);
  }

  scrollListener() {
    const elTop = document.getElementById("scrollMenu");
    const scrollEl = window;
    let offset = this.calculateTopPosition(elTop);

    const offsetHeight = offset - scrollEl.pageYOffset;

    if(offsetHeight < -48 && this.props.onFixed == false){
      this.props.funcFixed(true);
    }else if(offsetHeight + this.initHeight > -48){
      this.props.funcFixed(false);
    }
  }

  calculateTopPosition(el) {
    if (!el) {
      return 0;
    }
    return el.offsetTop + this.calculateTopPosition(el.offsetParent);
  }

  render() {
    const {
      onFixed,
    } = this.props;

    return (
      <div>
        <div style={onFixed ? ({height: this.height + "px"}):null}></div>
     <div id="scrollMenu" className={onFixed ? (styles.fixed):(styles.nonfixed)}>

      {this.props.children}
     </div>
    </div>

    );
  }
}
