export const label = [['1h - 3h','4h - 6h', '7h - 9h', '10h - 12h','13h - 15h','16h - 18h','19h - 21h','22h - 24h'], ['1h - 6h', '7h - 12h', '13h - 18h', '19h - 24h'], ['Day 1','Day 2','Day 3','Day 4','Day 5']] 

export const city = "Madrid,es"

export let theTrueData = {
  linear: {
    threeHours: {
      temp: null, temp_min: null, temp_max: null, pressure: null, humidity: null
    },
    sixHours: {
      temp: null, temp_min: null, temp_max: null, pressure: null, humidity: null
    },
    fiveDays: {
      temp: null, temp_min: null, temp_max: null, pressure: null, humidity: null
    }
  },
  pie: {
    threeHours: {
      temp: null, temp_min: null, temp_max: null, pressure: null, humidity: null
    },
    sixHours: {
      temp: null, temp_min: null, temp_max: null, pressure: null, humidity: null
    },
    fiveDays: {
      temp: null, temp_min: null, temp_max: null, pressure: null, humidity: null
    }
  }
}

export const backgroundArrColor = ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#fa6900","#5bb12f","#ff85cb"]