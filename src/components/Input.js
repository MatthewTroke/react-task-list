import React, { Component } from 'react';

class App extends Component {
  state = {
    title: '',
    description: ''
  }

  onTitleChange = (e) => {
    this.setState({title: e.target.value})
  }

  onDescriptionChange = (e) => {
    this.setState({description: e.target.value})
  }

  render() {
    return (
      <div className="container">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="taskname">Title</span>
          </div>
          <input onChange={this.onTitleChange} type="text" className="form-control" />
        </div>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">Description</span>
          </div>
          <textarea onChange={this.onDescriptionChange} className="form-control" ></textarea>
        </div>
        <button onClick={() => this.props.addTask(this.state)} type="button" className="btn btn-primary">Add Task</button>
      </div>
    );
  }
}

export default App;
