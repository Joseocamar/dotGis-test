import React,{Component} from 'react';
import {connect} from 'react-redux';
import ChartJsComp from './../chartJsComp'


class ChartJs extends Component {
  
  render () {
        
    if(!this.props) return <p>Loading...</p>
    
    else {
      return <ChartJsComp weatherObj={this.props}/>
      
  }
}
}


  const mapStateToProps = state => ({...state})
  
  const ChartJSRedux = connect(mapStateToProps, null)(ChartJs)
  export default ChartJSRedux;