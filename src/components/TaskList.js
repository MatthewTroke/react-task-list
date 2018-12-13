import React, { Component } from 'react';
import Task                 from './Task';
import Input                from './Input';
import axios                from 'axios';

class TaskList extends Component {
  state = {
    tasks: []
  };

  //Todo
  editTask = (id) => {
    console.log(id)
  }

  deleteTask = async (id) => {
    let response = await axios.delete(`http://localhost:8000/api/tasks/${id}`, {});
    if (response.status === 200) {
      let tasksCopy = [...this.state.tasks];
      let index = tasksCopy.findIndex((task) => task.id === id);
      tasksCopy.splice(index, 1);
      this.setState({tasks: tasksCopy});
    }
  }
  addTask = async (task) => {
    let response = await axios.post('http://localhost:8000/api/tasks', task);
    if (response.status === 200) {
      let tasksCopy = [...this.state.tasks]
      tasksCopy.push(response.data.task);
      this.setState({tasks: tasksCopy});
    }
  }

  async componentDidMount() {
    let tasks = await axios.get('http://localhost:8000/api/tasks');
    this.setState({tasks: tasks.data})
  }

  render() {
    return (
      <div>
        <Input addTask={this.addTask} />
        {this.state.tasks.map((task) => {
          return (
            <div key={task.id} className="container">
              <Task title={task.title} 
                    description={task.description} 
                    edit={() => this.editTask(task.id)} 
                    delete={() => this.deleteTask(task.id)} />
            </div>
          );
        })}
      </div>
    )
    
  }
}

export default TaskList;
