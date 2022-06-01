import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

//components
import SkillBox from '../components/SkillBox';

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = [
      { 
        BarColor: "rgb(45, 210, 15, 0.5)",
        BarHoverColor: "rgb(45, 210, 15, 0.8)",
        BarBorderColor: "rgb(29, 123, 12, 1)",
        SkillName: "Front-End Development",
        Technologies: ["ReactJS","HTML5","CSS3","JavaScript","Blazor","jQuery","Redux","AngularJS","ES6","JSON"],
        Rate: [8, 9, 8, 8, 7, 7, 7, 8, 5, 9]
      },
      { 
        BarColor: "rgb(45, 210, 15, 0.5)",
        BarHoverColor: "rgb(45, 210, 15, 0.8)",
        BarBorderColor: "rgb(29, 123, 12, 1)",
        SkillName: "Back-End Development",
        Technologies: ["VB.NET","C#","Classic ASP","NodeJS","SOAP API", "REST API"],
        Rate: [8, 7, 8, 5, 8, 9]
      },
      { 
        BarColor: "rgb(45, 210, 15, 0.5)",
        BarHoverColor: "rgb(45, 210, 15, 0.8)",
        BarBorderColor: "rgb(29, 123, 12, 1)",
        SkillName: "Mobile Development",
        Technologies: ["IOS Swift", "Android Java"],
        Rate: [6, 2]
      }
    ]
  }

  render() {
    if(this.props.currentactivemenu != this.props.location.pathname) {
      this.props.handleChangeRoute(this.props.location.pathname);
    }

    let skillset = this.state.map(skill => {
        return <SkillBox skills={skill} />
    });
    
    return (
      <div className="skills-page-container">
        <div>
          { skillset }
        </div>
      </div>
    )
  }
}

export default withRouter(Skills);