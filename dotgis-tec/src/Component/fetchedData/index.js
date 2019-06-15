import React, {Component} from 'react'
import {setGraphData} from './../../actions'
import {connect} from 'react-redux'

class FetchedData extends Component {

  handleGraphData = value => {
    this.props.setGraphData(value)
  }
  render() {
    

    return (
    <div className="asideView">
      <span className="fetchData" onClick={() => this.handleGraphData('temp')}>Temp</span>
      <span className="fetchData" onClick={() => this.handleGraphData('temp_min')}>Min temp</span>
      <span className="fetchData" onClick={() => this.handleGraphData('temp_max')}>Max temp</span>
      <span className="fetchData" onClick={() => this.handleGraphData('pressure')}>Pressure</span>
      <span className="fetchData" onClick={() => this.handleGraphData('sea_level')}>Sea Level</span>
      <span className="fetchData" onClick={() => this.handleGraphData('humidity')}>Humidity</span>
    </div>
    )}
}
const mapDispatchToProps = dispatch => ({
  setGraphData: value => dispatch(setGraphData(value))
})

const FetchedDataRedux = connect(null, mapDispatchToProps)(FetchedData)
export default FetchedDataRedux;