import './chart.css';
import React from 'react';
import Chartist from 'chartist';

class Chart extends React.Component {
    componentDidMount() {
      
        var data = {
            // A labels array that can contain any sort of values
            labels: this.props.time,
            // Our series array that contains series objects or in this case series data arrays
            series: [this.props.temp]
          };


          new Chartist.Line('.ct-chart', data, {
            //low: 17,
            showArea: false,
            showPoint: false,
            onlyInteger: false,
            lineSmooth: Chartist.Interpolation.monotoneCubic({
              fillHoles: false
            }),
            axisX: {
              labelInterpolationFnc: function(value, index) {
                return index % 10 === 0 ? value : null;
              }
            },
            axisY: {
              offset: 60
            }
          }, [
            ['screen and (max-width: 300px)', {
              axisX: {
                labelInterpolationFnc: function(value, index) {
                  return index % 30 === 0 ? value : null;
                }
              }
            }],
            ['screen and (min-width: 300px)', {
              axisX: {
                labelInterpolationFnc: function(value, index) {
                  return index % 15 === 0 ? value : null;
                }
              }
            }],
            ['screen and (min-width: 600px)', {
              axisX: {
                labelInterpolationFnc: function(value, index) {
                  return index % 10 === 0 ? value : null;
                }
              }
            }]
          ]);
    };

    componentDidUpdate() {
      var data = {
        labels: this.props.time,
        series: [this.props.temp]
      };


      new Chartist.Line('.ct-chart', data, {
        //low: 17,
        showArea: false,
        showPoint: false,
        onlyInteger: false,
        lineSmooth: Chartist.Interpolation.monotoneCubic({
          fillHoles: false
        }),
        axisX: {
          labelInterpolationFnc: function(value, index) {
            return index % 10 === 0 ? value : null;
          }
        },
        axisY: {
          offset: 60
        }
      }, [
        ['screen and (max-width: 300px)', {
          axisX: {
            labelInterpolationFnc: function(value, index) {
              return index % 25 === 0 ? value : null;
            }
          }
        }],
        ['screen and (min-width: 300px)', {
          axisX: {
            labelInterpolationFnc: function(value, index) {
              return index % 15 === 0 ? value : null;
            }
          }
        }],
        ['screen and (min-width: 600px)', {
          axisX: {
            labelInterpolationFnc: function(value, index) {
              return index % 10 === 0 ? value : null;
            }
          }
        }]
      ]);
    }

    render() {
        return (
            <div id="chart1" className="ct-chart .ct-golden-section ">

            </div>
        );
    };
}

export default Chart;
