import {setWeather, setGraphType, setTimeLapse, setGraphData} from './../actions/'

let state = {}

export const reducer = (state, action) => {
  switch (action.type) {
    case setWeather:
      return { state: action.value}
    case setGraphType:
      state = {...state.state}
      state.graphType = action.value
      return {state}
    case setTimeLapse:
      state = {...state.state}
      state.graphTimelapse = action.value
      return {state}
    case setGraphData:
      state = {...state.state}
      state.graphData = action.value
      return {state}
    default:
      break;
  }
}