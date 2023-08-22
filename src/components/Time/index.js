import React, { PureComponent } from 'react';
import moment from 'moment';
import styles from './styels.less'
class Time extends PureComponent {
  constructor(props) {
    super(props);
  }
  state = { time: moment().format('HH:mm:ss') }
  componentDidMount() {
    this.getTime()
  }
  getTime = () => {
    setInterval(() => {
      let data = moment().format('HH:mm:ss');
      this.setState({ time: data })
    }, 1000)
   
  }
  render() {
    let time = this.state.time;
    return (<div className={styles.center}>
      <span className={styles.spanObj}>{moment().format('YYYY/MM/DD')}</span>&nbsp;&nbsp;
      <span className={styles.spanObj}>{time}</span>
    </div>)
  }
}
export default Time;
