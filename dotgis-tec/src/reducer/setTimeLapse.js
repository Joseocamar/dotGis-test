import {setTimeLapse} from './../actions/'


export const TimeLapse = (state, action) => {
  switch (action.type) {
    case setTimeLapse:
      state = {...state.state}
      state.graphTimelapse = action.value
      return {state}
    default:
      return state;
  }
}