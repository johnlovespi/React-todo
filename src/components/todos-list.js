import _ from 'lodash';
import React, { Component } from 'react';
import TodosListHeader from './todos-list-header';
import TodosListItem from './todos-list-item';
import style from './todos-list-item.css';

export default class TodosList extends React.Component {
  renderItems(){
    console.log('*********', this.props.todo);

    const props = _.omit(this.props, 'todos');

    return _.map(this.props.todo, (todo,index) =>
      <TodosListItem key={index}
      {...todo} {...props} />);
  }


render(){
    return(
      <table>
        <TodosListHeader />
          <tbody>
            {this.renderItems()}
          </tbody>
      </table>
    );
  }
}
