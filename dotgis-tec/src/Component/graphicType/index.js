import React, {Component} from 'react';
import {setGraphType} from './../../actions'
import {connect} from 'react-redux'

class GraphicType extends Component {

  handleGraphType = value => {
    this.props.setGraphType(value)
  }

  render() {
  
  return (
  <div className="alignerFlexRow">
    <span className="graphicType" onClick={() => this.handleGraphType('Bar')}>Bar</span>
    <span className="graphicType" onClick={() => this.handleGraphType('Line')}>Line</span>  
    <span className="graphicType" onClick={() => this.handleGraphType('Horizontal')}>Horizontal</span>  
    <span className="graphicType" onClick={() => this.handleGraphType('Doughnut')}>Doughnut</span> 
    <span className="graphicType" onClick={() => this.handleGraphType('Polar')}>Polar</span>  
  </div>
  )
}}


const mapDispatchToProps = dispatch => ({
  setGraphType: value => dispatch(setGraphType(value))
})

const GraphicTypeRedux = connect(null, mapDispatchToProps)(GraphicType)
export default GraphicTypeRedux;