import React, {Component} from 'react';
import './App.scss';
import {connect} from 'react-redux'
import Navbar from './Component/Navbar'
import FetchedData from './Component/fetchedData'
import ChartJs from './Component/chartJs'
import GraphicType from './Component/graphicType'
import HourChart from './Component/hourChart'
import {fetchData} from './actions'


class App extends Component {
    

  render() {
    this.props.fetchData()  
  
    return (
    <div className="App">
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <FetchedData/>
        <section className="sectionView">
        
          <GraphicType/>         
          <ChartJs/>
          <HourChart/>
        
        </section>
        
      </main>
    </div> 
  )}
}

const mapDispatchToProps = dispatch => ({
  fetchData: value => dispatch(fetchData())
})

const AppRedux = connect(null, mapDispatchToProps)(App)

export default AppRedux