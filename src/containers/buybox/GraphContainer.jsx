import React, {
  Component,
} from 'react';
import Highcharts from 'highcharts';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  border-top: 2px solid #D6D6DA;
  border-bottom: 2px solid #D6D6DA;
`;

export default class GraphContainer extends Component {

  componentDidMount () {
    let config = {
      chart: {
        height: 300,
        zoomType: 'x',
        resetZoomButton: {
          minRange: 100,
          theme: {
            fill: 'white',
            stroke: '#bfbbf2',
            r: 4,
            style: {
              color: '#4b42c6'
            },
            states: {
              hover: {
                fill: '#eeeeee',
                style: {
                  color: '#4b42c6'
                }
              }
            }
          }
        },
        style: {
          fontFamily: 'Open Sans'
        }
      },
      credits: {
        enabled: false
      },
      xAxis: [
        {
          crosshair: {
            width: 30,
            color: '#efefef'
          },
          type: 'datetime',
          title: {
            text: 'Date'
          },
          lineColor: 'transparent',
          tickLength: 0
        }
      ],
      yAxis: [{
        gridLineWidth: 0,
        gridLineColor: 'transparent',
        title: {
          text: '',
          style: {
            color: "#f34fac"
          }
        },
        labels: {
          format: '{value}',
          style: {
            color: "#f34fac"
          }
        },
        tickAmount: 5,
        opposite: false,
        crosshair: {
          label: {
            enabled: true
          }
        }
      }],
      tooltip: {
        shared: true,
        crosshairs: true,
        shadow: true,
        backgroundColor: 'white',
        borderRadius: 6,
        borderWidth: 0,
        positioner: function(labelWidth, labelHeight, point) {
          return {
            x: point.plotX - 10,
            y: 0
          };
        }
      },
      legend: {
        align: 'top',
        verticalAlign: 'top',
        layout: 'verticle',
        shadow: false,
        symbolRadius: 0
      },
      plotOptions: {
        series: {
          fillColor: {
            linearGradient: [0, 0, 0, 300],
            stops: [[0.1, '#008CFF'], [0.55, '#008CFF00']]
          }
        },
        areaspline: {
          marker: {
            enabled: true,
            symbol: 'circle',
            radius: 3
          }
        },
        spline: {
          marker: {
            enabled: false
          }
        }
      },
      series: [{
        color: '#AE66E5',
        type: "areaspline",
        data: [[1534028024000, 34], [1534128024000, 24], [1534328024000, 14], [1535028024000, 44], [1537028024000, 14]]
      }],
      title: {
        text: 'BuyBox Price Graph',
        align: 'left',
        x: 70,
        style: {
          fontFamily: 'Open Sans',
          fontStyle: 'normal',
          fontWeight: 600,
          lineHeight: '21px',
          fontSize: '14px',
          color: '#1E135F',
        },
      },
    };

    Highcharts.chart('graph1', config);
    config.title.text = 'BuyBox Share Graph'
    config.series = [{
      color: '#008CFF',
      type: "areaspline",
      data: [[1534028024000, 104], [1534128024000, 134], [1534328024000, 34], [1535028024000, 234], [1537028024000, 154]]
    }];

    Highcharts.chart('graph2', config);
  }
  render () {
    return (
      <Container>
        <div style={{width:'50%'}}>
          <div id='graph1' />
        </div>
        <div style={{width:'50%'}}>
          <div id='graph2' />
        </div>
      </Container>
    )
  }
}