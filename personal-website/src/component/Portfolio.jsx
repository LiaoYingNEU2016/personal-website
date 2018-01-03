import React, { Component } from 'react';
import Project from './Project';


class Portfolio extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isShowing: '',
      project: ''
    }
    this.updateProjectsStatus=this.updateProjectsStatus.bind(this);
  }

  updateProjectsStatus(status) {
    if (status) {
      this.setState({isShowing: 'showing', project: status});
    } else {
      this.setState({isShowing: '', project: ''});
    }
  }

  render() {
    return (
      <div className="projects">
        <h1>Projects</h1>
        <hr/>
        <div className={`cards ${this.state.isShowing}`}>
          <Project name='questionnaire' updateProjectsStatus={this.updateProjectsStatus} onShowStatusChange={this.state.project}/>
          <Project name='carApplication' updateProjectsStatus={this.updateProjectsStatus} onShowStatusChange={this.state.project}/>
          <Project name='database' updateProjectsStatus={this.updateProjectsStatus} onShowStatusChange={this.state.project}/>
        </div>
      </div>
    );
  }
}

export default Portfolio;