import React, { Component } from 'react';
import './App.css';
import TodoForm from './components/todoForm';
import TodoList from './components/todoList';
class App extends Component {
  state = {
    todoList: [],
    currentItem: { text: '', completed: false, id: 0 },
    filteredList: []
  }
  addItem = e => {
    e.preventDefault();
    var newItem = this.state.currentItem;
    if (newItem.text !== '') {
      const OriginalId = { ...newItem, id: this.state.currentItem.id + 1 }
      const newList = [...this.state.filteredList, OriginalId]
      this.setState({ todoList: newList, filteredList: newList })
    }
  }
  handleInput = e => {
    e.preventDefault();
  }
  handleChange = e => {
    const value = e.target.value;
    const currentItem = { ...this.state.currentItem, text: value }
    this.setState({ currentItem })
  }
  handleComplete = (todo) => {
    this.state.filteredList.map(_todo => _todo === todo ? _todo.completed = !todo.completed : todo)
    this.setState({ ...this.state.filteredList, ...this.state.todoList })
  }
  handleDelete = (todo) => {
    const todos = this.state.filteredList.filter(_todo => _todo !== todo)
    this.setState({ filteredList: todos, todoList: todos })
  }
  filterCompleted = () => {
    const defaultItems = this.state.todoList;
    const completedItems = defaultItems.filter(_todo => _todo.completed == true)
    this.setState({ filteredList: completedItems })
  }
  filterActive = () => {
    const defaultItems = this.state.todoList;
    const completedItems = defaultItems.filter(_todo => _todo.completed == false)
    this.setState({ filteredList: completedItems })
  }
  filterAll = () => {
    this.setState({ filteredList: this.state.todoList })
  }
  clearAll = () => {
    this.setState({ todoList: [], filteredList: [] })
  }

  render() {

    return (
      <div className="App">
        <TodoForm addItem={this.addItem} handleInput={this.handleInput} handleChange={this.handleChange} />
        <TodoList handleClear={this.clearAll} handleCompleted={this.filterCompleted} handleActive={this.filterActive} handleAll={this.filterAll} handleDelete={this.handleDelete} todoList={this.state.filteredList} handleComplete={this.handleComplete} />

      </div>
    );
  }
}

export default App;
//Developed By UsamaAhmad751