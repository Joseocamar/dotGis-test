import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Bar, Line, HorizontalBar, Polar, Doughnut} from 'react-chartjs-2';

const backgroundArrColor = ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#fa6900","#5bb12f","#ff85cb"]


let data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'what', 'the', 'fuck'],
  datasets: [{
      label: 'Cº',
      fill: false,
      showLine: true,
      data: [12, 19, 3, 5, 50, 25, 30, 16],
      backgroundColor: backgroundArrColor,
      borderColor: '#000000',
      borderWidth: 1
  }]
}

const chartType = a => {
  switch (a) {
    case 'Bar':
      return Bar  
    case 'Line':
      return Line  
    case 'Horizontal':
      return HorizontalBar
    case 'Doughnut':
      return Doughnut
    case 'Polar':
      return Polar
    default:
      break;
  }
}



class ChartJs extends Component {
  
  
  render () {
    
    console.log(this.props)
  let setData = () =>  {
      data = this.props.graphType === 'Bar'  || 
      this.props.graphType === 'Line' ||
      this.props.graphType === 'Horizontal' ?
      ({
        labels: this.props.state[`${this.props.graphTimelapse}`].linear.label,
        datasets: [{
            label: "Cº",
            fill: false,
            showLine: true,
            data: this.props.state[`${this.props.graphTimelapse}`].linear.data[`${this.props.graphData}`],
            backgroundColor: backgroundArrColor,
            borderColor: '#000000',
            borderWidth: 1
        }]
      })
      :
      ({
        labels: this.props.state[`${this.props.graphTimelapse}`].pie[`${this.props.graphData}`][`${this.props.graphData}`].label,
        datasets: [{
          label: "PieData",
          fill: false,
          showLine: true,
          data: this.props.state[`${this.props.graphTimelapse}`].pie[`${this.props.graphData}`][`${this.props.graphData}`].values,
          backgroundColor: backgroundArrColor,
          borderColor: '#000000',
          borderWidth: 1
      }]
    })
  }
  if(!this.props.state) return <p>Loading...</p>
  else {

  setData()

  switch (chartType(this.props.graphType)) {
    case Line:

      return (<div className="setHeight">
        <Line
          data={data}
          options={{
          maintainAspectRatio: false
          }}
        />
        </div>)
    case Bar:
      return (<div className="setHeight">
          <Bar
          data={data}
          options={{
          maintainAspectRatio: false
          }}
          />
          </div>)
      case Doughnut:
        return (<div className="setHeight">
            <Doughnut
              data={data}
              options={{
              maintainAspectRatio: false
              }}
              />
            </div>)

        case HorizontalBar:
        return (<div className="setHeight">
            <HorizontalBar
              data={data}
              options={{
              maintainAspectRatio: false
              }}
              />
            </div>)

        case Polar:
          return (<div className="setHeight">
              <Polar
                data={data}
                options={{
                maintainAspectRatio: false
                }}
                />
              </div>)
  
    default:
          return (<div className="setHeight">
            <Line
              data={data}
              options={{
              maintainAspectRatio: false
              }}
            />
          </div>)
  
    }
  }
}
}


  const mapStateToProps = state => ({...state})
  
  const ChartJSRedux = connect(mapStateToProps, null)(ChartJs)
  export default ChartJSRedux;