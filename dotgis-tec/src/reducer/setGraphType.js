import {setGraphType} from './../actions/'


export const GraphType = (state, action) => {
  switch (action.type) {
    case setGraphType:
      state = {...state.state}
      state.graphType = action.value
      return {state}
    default:
      return state;
  }
}