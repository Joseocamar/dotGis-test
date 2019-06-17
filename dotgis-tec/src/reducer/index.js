import {SET_WEATHER,
  SET_GRAPH_TYPE,
  SET_TIMELAPSE,
  SET_GRAPH_DATA} from './../actions/'


const reducer = (state, action) => {
  switch (action.type) {
    case SET_WEATHER:
      return {state: action.value, graphType: "Bar", graphTimelapse: "threeHours", graphData: "temp"}
    case SET_GRAPH_TYPE:
      return {...state, graphType: action.value}
    case SET_TIMELAPSE:
        return {...state, graphTimelapse: action.value}
    case SET_GRAPH_DATA:
        return {...state, graphData: action.value}
    default:
      return state
  }
}


export default reducer