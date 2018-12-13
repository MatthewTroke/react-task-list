import React, { Component } from 'react';
import Task                 from './Task';
import axios                from 'axios';

class TaskList extends Component {
  state = {
    tasks: []
  };

  async componentDidMount() {
    let tasks = await axios.get('http://localhost:8000/api/tasks');
    this.setState({tasks: tasks.data})
  }

  render() {
    console.log(this.state);
    return this.state.tasks.map((task) => {
      return (
        <div key={task.id} className="container">
          <Task name={task.title} description={task.description} />
        </div>
      );
    });
  }
}

export default TaskList;
