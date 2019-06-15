import {FarenheitToCelsius} from './FarenheitToCelsius'

//numOut 5 para intervalos de 3 horas (1 dia) posSum 1
//numOut 5 para intervalos de 6 horas (1 dia) posSum 2
//numOut default y posSum 8 para info general sobre 5 días

const dataRetrieve = (obj, val, numOut = 1, posSum = 1 ) => {
  let tempF;
  let temp = []
  const workBench = Object.entries(obj.list.map(elm => elm)).map(elm => Object.entries(elm[1]).map(elm=> elm[1]))
  
  for(let i = 0; i < workBench.length/numOut; i+=posSum){
    if(val==='temp'||val==='temp_min'||val==='temp_max') tempF = Math.round(FarenheitToCelsius(workBench[i][1][val]))
    else tempF = Math.round(workBench[i][1][val])
    temp.push(tempF)
  }
    return temp
}

export {dataRetrieve}