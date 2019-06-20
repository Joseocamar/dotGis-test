import {dataRetrieve} from './../services/dataRetrieve'
import {PieDataMaker} from './../services/PieDataMaker'
import {Data} from './../services/Data'
import {label, city, theTrueData, backgroundArrColor} from './../Constants'

export const SET_WEATHER    = "SET_WEATHER"
export const SET_GRAPH_TYPE = "SET_GRAPH_TYPE"
export const SET_TIMELAPSE  = "SET_TIMELAPSE"
export const SET_GRAPH_DATA = "SET_GRAPH_DATA"

export const setWeather = value => ({type: SET_WEATHER, value})
export const setGraphType = value => ({type: SET_GRAPH_TYPE, value})
export const setTimeLapse = value => ({type: SET_TIMELAPSE, value})
export const setGraphData = value => ({type: SET_GRAPH_DATA, value})


export const fetchData = () => {
  return dispatch => {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},es&appid=2ca20b89e8b440308b7ac50b69d9dfad`)
  .then(res => res.json())
  .then (data => {

    for (let i in theTrueData){
      for(let j in theTrueData[i]){
        for(let z in theTrueData[i][j]){
          switch (i) {
            case "linear":
              switch (j) {
                case "threeHours":
                  theTrueData[i][j][z] = Data(label[0], dataRetrieve(data, z, 5), backgroundArrColor)
                  break;
              
                case "sixHours":
                  theTrueData[i][j][z] = Data(label[1], dataRetrieve(data, z, 5, 2), backgroundArrColor)
                  break;
                
                case "fiveDays":
                  theTrueData[i][j][z] = Data(label[2], dataRetrieve(data, z, 1, 8), backgroundArrColor)
                  break;
                
                  default:
                  break;  
                }
              break;
            case "pie":
              theTrueData[i][j][z] = PieDataMaker(theTrueData, z, j)
              break;    
            default:
              break;
          }
        }
      }
    }
    dispatch(setWeather(theTrueData))
  })
  .catch(err => console.log(err))
  }
}