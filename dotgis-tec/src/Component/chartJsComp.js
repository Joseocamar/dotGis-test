import React from 'react'
import {Bar, Line, HorizontalBar, Polar, Doughnut} from 'react-chartjs-2'

let data;

const ChartJsComp = props => {
  const chartType = (elm) => {
    switch (elm.graphType) {
      case 'Bar':
        data=elm.weatherData.linear[elm.graphTimelapse][elm.graphData]
        return (<div className="setHeight">
        <Bar
          data={data}
          options={{
          maintainAspectRatio: false
          }}
        />
        </div>) 
      case 'Line':
        data=elm.weatherData.linear[elm.graphTimelapse][elm.graphData]
        return (<div className="setHeight">
        <Line
          data={data}
          options={{
          maintainAspectRatio: false
          }}
        />
        </div>)  
      case 'Horizontal':
        data=elm.weatherData.linear[elm.graphTimelapse][elm.graphData]
        return (<div className="setHeight">
        <HorizontalBar
          data={data}
          options={{
          maintainAspectRatio: false
          }}
        />
        </div>)
      case 'Doughnut':
        return (<div className="setHeight">
        <Doughnut
          data={elm.weatherData.pie[elm.graphTimelapse][elm.graphData]}
          options={{
          maintainAspectRatio: false
          }}
        />
        </div>)
      case 'Polar':
        return (<div className="setHeight">
        <Polar
          data={elm.weatherData.pie[elm.graphTimelapse][elm.graphData]}
          options={{
          maintainAspectRatio: false
          }}
        />
        </div>)
      default:
        return (<h1>Problem while loading</h1>)
    }
  }
  
  return (
  
      chartType(props.weatherObj)
    // <h1>Hi</h1>
  )
}

export default ChartJsComp