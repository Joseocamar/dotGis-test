import React, {Component} from 'react';
import {setTimeLapse} from './../../actions'
import {connect} from 'react-redux'

class HourChart extends Component{

  handleTimeLapse = value => {
    this.props.setTimeLapse(value)
  }

  render() {

  return(
  <div className="alignerFlexRow">
    <span className="hourChart" onClick={() => this.handleTimeLapse('threeHours')}>Day 3 Hours</span>
    <span className="hourChart" onClick={() => this.handleTimeLapse('sixHours')}>Day 6 Hours</span>
    <span className="hourChart" onClick={() => this.handleTimeLapse('fiveDays')}>5 Days</span>  
  </div>  
  )}
}

const mapDispatchToProps = dispatch => ({
  setTimeLapse: value => dispatch(setTimeLapse(value))
})

const HourChartRedux = connect(null, mapDispatchToProps)(HourChart)
export default HourChartRedux;