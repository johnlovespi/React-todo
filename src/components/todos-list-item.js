import React, { Component } from 'react';
import style from './todos-list-item.css';

export default class TodosListItem extends React.Component {
  //having constuctor should not be here
  constructor(props){
    super(props);
      this.state = {
        isEditing: false
      };
}

renderTaskSection(){
  const { task, isCompleted } = this.props;

  const taskStyle = {
    color: isCompleted ? 'green' : 'red',

    cursor: 'pointer'
  }
  if(this.state.isEditing){
    return (
      <td>
        <form onSubmit={this.onSaveClick.bind(this)}>
          <input type="text" defaultValue={task} ref="editInput" />
        </form>
      </td>
      );
  }

  return (
            <td style={taskStyle}
            onClick={this.props.toggleTask.bind(this, task)}
          >
          {task}
            </td>
        );

}


renderActionsSection() {
  if (this.state.isEditing) {
        return (
          <td>
            <button onClick={this.onSaveClick.bind(this)}>Post</button>
            <button onClick={this.onCancel.bind(this)}>Cancel</button>
          </td>
      );
  }
      return (
          <td>
            <button onClick={this.onEditing.bind(this)}>Edit</button>
            <button onClick={this.props.deleteTask.bind(this, this.props.task)}>Delete</button>
          </td>
      );
  }




  render() {
      return(
          <tr className="test">
              {this.renderTaskSection()}
              {this.renderActionsSection()}
          </tr>
    );
  }

//not sure why this is down here
  onEditing() {
      this.setState({ isEditing: true });
  }
  onCancel(){
      this.setState({ isEditing: false });
  }

  onSaveClick(event){
    event.preventDefault();

      const oldTask = this.props.task;
      const newTask = this.refs.editInput.value;
      this.props.saveTask(oldTask, newTask);
      this.setState({ isEditing: false});
  }


}
