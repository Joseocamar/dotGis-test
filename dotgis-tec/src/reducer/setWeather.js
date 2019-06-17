import {setWeather} from './../actions/'


export const Weather = (state, action) => {
  switch (action.type) {
    case setWeather:
      if(state) return { ...state, state: action.value}
      else return state
    default:
      return state
  }
}