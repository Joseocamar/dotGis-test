import React from 'react'
import {Bar, Line, HorizontalBar, Polar, Doughnut} from 'react-chartjs-2'
import {city} from './../Constants/index'

let data;

const ChartJsComp = props => {
  const chartType = (elm) => {
    switch (elm.graphType) {
      case 'Bar':
        data=elm.weatherData.linear[elm.graphTimelapse][elm.graphData]
        return (
        <Bar
          data={data}
          options={{
          maintainAspectRatio: false
          }}
        />) 
      case 'Line':
        data=elm.weatherData.linear[elm.graphTimelapse][elm.graphData]
        return (
        <Line
          data={data}
          options={{
          maintainAspectRatio: false
          }}
        />)  
      case 'Horizontal':
        data=elm.weatherData.linear[elm.graphTimelapse][elm.graphData]
        return (
        <HorizontalBar
          data={data}
          options={{
          maintainAspectRatio: false
          }}
        />)
      case 'Doughnut':
        return (
        <Doughnut
          data={elm.weatherData.pie[elm.graphTimelapse][elm.graphData]}
          options={{
          maintainAspectRatio: false
          }}
        />)
      case 'Polar':
        return (
        <Polar
          data={elm.weatherData.pie[elm.graphTimelapse][elm.graphData]}
          options={{
          maintainAspectRatio: false
          }}
        />)
      default:
        return (<h1>Problem while loading</h1>)
    }
  }
  
  return (
    <div className="setHeight">
      {chartType(props.weatherObj)}
      <p>{`Showing ${props.weatherObj.graphData} ${props.weatherObj.graphTimelapse} in ${city}`}</p>
    </div>
  )
}

export default ChartJsComp