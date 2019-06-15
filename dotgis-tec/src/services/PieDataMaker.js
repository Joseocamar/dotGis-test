const PieDataMaker = (dataSet, val, timeLapse) => {
  let label = []
  let values = []
  
  const arrT = new Array(dataSet[timeLapse].linear.data[val])
  const arr = arrT.join(",").split(",");
    arr.forEach(elm=>{
      if(elm===null) return;
      label.push(elm)
      let elmVal = elm
      let count = 0

      for(let i = 0; i < arr.length; i++){
        if(elmVal === arr[i]) {
          count++
          arr[i] = null
        }
      }
      values.push(count)
    })

    return {[val]: {label, values}}
}


export {PieDataMaker}