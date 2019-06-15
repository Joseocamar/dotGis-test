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
  console.log(this.props.state)
  let a;
  let setData = () =>  {
      data = this.props.state.graphType === 'Bar'  || 
      this.props.state.graphType === 'Line' ||
      this.props.state.graphType === 'Horizontal' ?
      ({
        labels: this.props.state[`${this.props.state.graphTimelapse}`].linear.label,
        datasets: [{
            label: "Awita",
            fill: false,
            showLine: true,
            data: this.props.state[`${this.props.state.graphTimelapse}`].linear.data[`${this.props.state.graphData}`],
            backgroundColor: backgroundArrColor,
            borderColor: '#000000',
            borderWidth: 1
        }]
      })
      :
      ({
        labels: this.props.state[`${this.props.state.graphTimelapse}`].pie[`${this.props.state.graphData}`][`${this.props.state.graphData}`].label,
        datasets: [{
          label: "Awita2",
          fill: false,
          showLine: true,
          data: this.props.state[`${this.props.state.graphTimelapse}`].pie[`${this.props.state.graphData}`][`${this.props.state.graphData}`].values,
          backgroundColor: backgroundArrColor,
          borderColor: '#000000',
          borderWidth: 1
      }]
    })
  }

  

  setData()

  switch (chartType(this.props.state.graphType)) {
    case Line:

      a = (<div className="setHeight">
        <Line
          data={data}
          options={{
          maintainAspectRatio: false
          }}
        />
        </div>)
      break;
    case Bar:
      a = (<div className="setHeight">
          <Bar
          data={data}
          options={{
          maintainAspectRatio: false
          }}
          />
          </div>)
      break;
      case Doughnut:
        a = (<div className="setHeight">
            <Doughnut
              data={data}
              options={{
              maintainAspectRatio: false
              }}
              />
            </div>)
        break;
        case HorizontalBar:
        a = (<div className="setHeight">
            <HorizontalBar
              data={data}
              options={{
              maintainAspectRatio: false
              }}
              />
            </div>)
        break;
        case Polar:
          a = (<div className="setHeight">
              <Polar
                data={data}
                options={{
                maintainAspectRatio: false
                }}
                />
              </div>)
          break;
    default:
          a = (<div className="setHeight">
            <Line
              data={data}
              options={{
              maintainAspectRatio: false
              }}
            />
          </div>)
          break;
    }
    return a}
  }


  const mapStateToProps = state => ({...state})
  
  const ChartJSRedux = connect(mapStateToProps, null)(ChartJs)
  export default ChartJSRedux;