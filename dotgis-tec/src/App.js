import React, {Component} from 'react';
import './App.scss';
import {connect} from 'react-redux'
import Navbar from './Component/Navbar'
import FetchedData from './Component/fetchedData'
import ChartJs from './Component/chartJs'
import GraphicType from './Component/graphicType'
import HourChart from './Component/hourChart'
import {setWeather} from './actions'
import { theTrueData } from './services/FetchWeather';


class App extends Component {
    

  render() {
    this.props.setWeather(theTrueData)  
  
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
  setWeather: value => dispatch(setWeather(value))
})

const AppRedux = connect(null, mapDispatchToProps)(App)

export default AppRedux