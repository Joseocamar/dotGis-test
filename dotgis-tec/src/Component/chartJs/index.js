import React from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
  }]
}

const chartType = a => a

const ChartJs = () => 
  
{
  let a;
  switch (chartType(Bar)) {
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
      case Pie:
        a = (<div className="setHeight">
            <Pie
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



export default ChartJs;