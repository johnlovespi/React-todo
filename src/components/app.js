import React, { Component } from 'react';
import CreateTodo from './create-todo';
import TodosList from './todos-list';


const todos = [
{
  task: 'make React Tutorial',
  isCompleted : false
},

{
  task: 'eat dinner',
  isCompleted: true
},
{
  task: 'saturday shuffle',
  isCompleted: true
},
{
  task: 'lunch with stan',
  isCompleted: true
},
{
  task: 'tv special',
  isCompleted: false
}
];

export default class App extends React.Component{
//writing the state here
  constructor(props){
    super(props);

      this.state = {
      todos
    }
  }


  render(){
    return(
       <div>
         <h1>React ToDos Application</h1>
          <CreateTodo
            createTask={this.createTask.bind(this)}
            />
           <TodosList
            todo={this.state.todos}
            saveTask={this.saveTask.bind(this)}
            deleteTask={this.deleteTask.bind(this)}
            //change red to green viversa when task done compnent
            toggleTask={this.toggleTask.bind(this)}
           />


      </div>
      );
  }

  toggleTask(task){
    const foundTodo = _.find(this.state.todos, todo => todo.task === task);
    foundTodo.isCompleted = !foundTodo.isCompleted;
    this.setState({ todos: this.state.todos });

  }

  createTask(task){
    //pushing created task into the array
    this.state.todos.push({
      task,
      isCompleted: true
    });
    //reRenders component
    this.setState({ todos: this.state.todos });
  }

  saveTask(oldTask, newTask){
    const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
    foundTodo.task  = newTask;
    this.setState({todos: this.state.todos});

  }

  deleteTask(taskToDelete){
   _.remove(this.state.todos, todo => todo.task === taskToDelete);
    this.setState({todo:this.state.Todos});

  }

}
