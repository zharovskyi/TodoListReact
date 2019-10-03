import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import shortid from 'shortid';
import TaskEditor from './componenets/TaskEditor/TaskEditor';
import TaskFilter from './componenets/TaskFilter/TaskFilter';
import TaskList from './componenets/TaskList/TaskList';


const containerStyles = {
  maxWidth: 1200,
  minWidth: 800,
  marginLeft: 'auto',
  marginRight: 'auto',
};



class App extends Component {
  state = {
    tasks: [],
  }
  addTask = task => {
    const taskToAdd = {
      ...task,
      id: shortid.generate(),
      comleted: false,
    }
    this.setState(prevState => ({
      tasks: [...prevState.tasks, taskToAdd],
    }))
  }
  deleteTask = id => {
    this.setState(prevState => ({
      tasks: prevState.tasks.filter(task => task.id !== id)
    }))
  }
  updateComplited = id => {
    this.setState(state => ({
      tasks: state.tasks.map(task => {
        task.id = id ? { ...task, comleted: !task.completed } : task;
      })
    }))
  }

  render() {
    const { tasks } = this.state;
    return (
      <div style={containerStyles}>
        <TaskEditor onAddTask={this.addTask} />
        <hr />
        <TaskFilter />
        <TaskList
          items={tasks}
          onDeleteTask={this.deleteTask}
        />
      </div>
    );
  }
}

export default App;


