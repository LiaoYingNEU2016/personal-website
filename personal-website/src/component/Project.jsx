import React, { Component } from 'react';
import {projectDetails} from '../projectDetails'


class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: ''
    }
    this.onShowProject=this.onShowProject.bind(this);
    this.updateProjectsStatus=this.updateProjectsStatus.bind(this);
  }

  onShowProject(e) {
    e.preventDefault();
    const currIsShow = this.state.isShow;
    if (currIsShow) {
      this.setState({isShow: ''});
      this.updateProjectsStatus('');
    } else {
      this.setState({isShow: 'show'});
      this.updateProjectsStatus(this.props.name);
    }
  }

  updateProjectsStatus(status) {
    this.props.updateProjectsStatus(status);
  }

  componentWillReceiveProps() {
    if (this.props.onShowStatusChange && this.props.onShowStatusChange !== this.props.name) {
      this.setState({isShow: ''});
    }
  }

  render() {
    const project = this.props.name;
    const pic = projectDetails[project].pic;
    return (
      <div className={`card ${this.state.isShow}`} onClick={this.onShowProject}>
        <img src={pic} alt="Project Thumbnail" />
        <div className="card-title">
          <a href="/details" className="toggle-info btn">
            <span className="left"></span>
            <span className="right"></span>
          </a>
          <h2>
            {projectDetails[project].title}
            <small>
              {projectDetails[project].skills}
            </small>
          </h2>
        </div>
        <div className="card-flap flap1">
          <div className="card-description">
            {projectDetails[project].description}
          </div>
        </div>
      </div>
    )
  }
}

export default Project;