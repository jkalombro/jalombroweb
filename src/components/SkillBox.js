import React, { Component } from 'react'
import {HorizontalBar} from 'react-chartjs-2';

class SkillBox extends Component {
  render() {
    let data = {
        labels: this.props.skills.Technologies,
        datasets: [
          {
            label: 'Skill Rate On Scale of 10',
            backgroundColor: this.props.skills.BarColor,
            borderColor: this.props.skills.BarBorderColor,
            borderWidth: 1,
            hoverBackgroundColor: this.props.skills.BarHoverColor,
            hoverBorderColor: this.props.skills.BarBorderColor,
            data: this.props.skills.Rate
          }
        ]
    }

    let options = {
      scales: {
        xAxes: [{
            ticks: {
                beginAtZero:true,
                min: 0,
                max: 10    
            }
          }]
       }
    }

    return (
      <div className="skill-box">
        <h1>{this.props.skills.SkillName}</h1>
        <HorizontalBar data={data} options={options} />
        <br /><br />
      </div>
    )
  }
}

export default SkillBox;
