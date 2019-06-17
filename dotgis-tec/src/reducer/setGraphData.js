import {setGraphData} from './../actions/'


export const GraphData = (state, action) => {
  switch (action.type) {
    case setGraphData:
      state = {...state.state}
      state.graphData = action.value
      return {state}
    default:
     return state
  }
}