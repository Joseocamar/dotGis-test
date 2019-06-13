import React from 'react';
import './App.scss';
import Navbar from './Component/Navbar'
import FetchedData from './Component/fetchedData'
import ChartJs from './Component/chartJs'
import GraphicType from './Component/graphicType'
import HourChart from './Component/hourChart'

const App = () =>  (
    
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

    
  )


export default App;
