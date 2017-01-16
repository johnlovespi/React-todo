import _ from 'lodash';
import React, { Component } from 'react';
import TodosListHeader from './todos-list-header';
import TodosListItem from './todos-list-item';

export default class CreateTodo extends React.Component {


render(){
    return(
      <form onSubmit={this.handleCreate.bind(this)}>
      <input type="text" placeholder="what do i need to do"
      ref="createInput"/>
        <button>Create</button>
      </form>
    );
  }
  handleCreate(event){
    // grabes text from input
    event.preventDefault();
    //pushing to the array
    this.props.createTask(this.refs.createInput.value);
    //after type input goes blank
    this.refs.createInput.value = '';
    //console loggin to the Dom
    console.log(this.refs.createInput.value);
  }
}

//ref in react are identifiyers  for the Dom element
