import {dataRetrieve} from './../services/dataRetrieve'
import {PieDataMaker} from './../services/PieDataMaker'

export const SET_WEATHER    = "SET_WEATHER"
export const SET_GRAPH_TYPE = "SET_GRAPH_TYPE"
export const SET_TIMELAPSE  = "SET_TIMELAPSE"
export const SET_GRAPH_DATA = "SET_GRAPH_DATA"

export const setWeather = value => ({type: SET_WEATHER, value})
export const setGraphType = value => ({type: SET_GRAPH_TYPE, value})
export const setTimeLapse = value => ({type: SET_TIMELAPSE, value})
export const setGraphData = value => ({type: SET_GRAPH_DATA, value})



const city = "Madrid,es"
let dataSet
let theTrueData = {
  threeHours: {
    linear: {
      data: {temp: null, temp_min: null, temp_max: null, pressure: null, humidity: null},
      label: ['1h - 3h','4h - 6h', '7h - 9h', '10h - 12h','13h - 15h','16h - 18h','19h - 21h','22h - 24h']
    },
    pie: {}
  },
  sixHours: {
    linear: {
    data: {temp: null, temp_min: null, temp_max: null, pressure: null, humidity: null},
    label: ['1h - 6h', '7h - 12h', '13h - 18h', '19h - 24h']
    },
    pie: {}
  }, 
  fiveDays: {
    linear:{
      data: {temp: null, temp_min: null, temp_max: null, pressure: null, humidity: null}, 
      label: ['Day 1','Day 2','Day 3','Day 4','Day 5']
    },
    pie: {}
  }

};



export const fetchData = () => {
  return dispatch => {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},es&appid=2ca20b89e8b440308b7ac50b69d9dfad`)
  .then(res => res.json())
  .then (data => {
    dataSet = {...data}
    theTrueData.threeHours.linear.data.temp       = dataRetrieve(dataSet, 'temp', 5)
    theTrueData.threeHours.linear.data.temp_min   = dataRetrieve(dataSet, 'temp_min', 5)
    theTrueData.threeHours.linear.data.temp_max   = dataRetrieve(dataSet, 'temp_max', 5)
    theTrueData.threeHours.linear.data.pressure  = dataRetrieve(dataSet, 'pressure', 5)
    theTrueData.threeHours.linear.data.humidity   = dataRetrieve(dataSet, 'humidity', 5)

    theTrueData.sixHours.linear.data.temp       = dataRetrieve(dataSet, 'temp', 5, 2)
    theTrueData.sixHours.linear.data.temp_min   = dataRetrieve(dataSet, 'temp_min', 5,2)
    theTrueData.sixHours.linear.data.temp_max   = dataRetrieve(dataSet, 'temp_max', 5,2)
    theTrueData.sixHours.linear.data.pressure  = dataRetrieve(dataSet, 'pressure', 5,2)
    theTrueData.sixHours.linear.data.humidity   = dataRetrieve(dataSet, 'humidity', 5,2)

    theTrueData.fiveDays.linear.data.temp       = dataRetrieve(dataSet, 'temp', 1, 8)
    theTrueData.fiveDays.linear.data.temp_min   = dataRetrieve(dataSet, 'temp_min', 1, 8)
    theTrueData.fiveDays.linear.data.temp_max   = dataRetrieve(dataSet, 'temp_max', 1, 8)
    theTrueData.fiveDays.linear.data.pressure  = dataRetrieve(dataSet, 'pressure', 1, 8)
    theTrueData.fiveDays.linear.data.humidity   = dataRetrieve(dataSet, 'humidity', 1, 8)

    theTrueData.threeHours.pie.temp      = PieDataMaker(theTrueData, 'temp',      'threeHours')
    theTrueData.threeHours.pie.temp_min  = PieDataMaker(theTrueData, 'temp_min',  'threeHours')
    theTrueData.threeHours.pie.temp_max  = PieDataMaker(theTrueData, 'temp_max',  'threeHours')
    theTrueData.threeHours.pie.pressure = PieDataMaker(theTrueData, 'pressure', 'threeHours')
    theTrueData.threeHours.pie.humidity  = PieDataMaker(theTrueData, 'humidity',  'threeHours')

    theTrueData.sixHours.pie.temp      = PieDataMaker(theTrueData, 'temp',      'sixHours')
    theTrueData.sixHours.pie.temp_min  = PieDataMaker(theTrueData, 'temp_min',  'sixHours')
    theTrueData.sixHours.pie.temp_max  = PieDataMaker(theTrueData, 'temp_max',  'sixHours')
    theTrueData.sixHours.pie.pressure = PieDataMaker(theTrueData, 'pressure', 'sixHours')
    theTrueData.sixHours.pie.humidity  = PieDataMaker(theTrueData, 'humidity',  'sixHours')

    theTrueData.fiveDays.pie.temp      = PieDataMaker(theTrueData, 'temp',      'fiveDays')
    theTrueData.fiveDays.pie.temp_min  = PieDataMaker(theTrueData, 'temp_min',  'fiveDays')
    theTrueData.fiveDays.pie.temp_max  = PieDataMaker(theTrueData, 'temp_max',  'fiveDays')
    theTrueData.fiveDays.pie.pressure = PieDataMaker(theTrueData, 'pressure', 'fiveDays')
    theTrueData.fiveDays.pie.humidity  = PieDataMaker(theTrueData, 'humidity',  'fiveDays')

    dispatch(setWeather(theTrueData))
  })
  .catch(err => console.log(err))
  }
}