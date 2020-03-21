import React, { Component } from 'react';
class TodoList extends Component {
    render() {
      return (
            <React.Fragment>
                <div className="todo-box">
                    {

                        this.props.todoList.length === 0 ? <p>There is not any Activity</p> :
                            <ul className="todo-list">
                                {
                                    this.props.todoList.map(a => {
                                        return (
                                            <li key={a.id} className="row">
                                                {console.log(a.id)}
                                                <div className={a.completed === true ? 'strikethorugh my-auto  todo col-sm-6' : " col-sm-6 todo my-auto"}>{a.text}</div>
                                                <div className="col-sm-6 todo-actions">
                                                    <button className="btn btn-dark" onClick={() => this.props.handleComplete(a)} >{a.completed ? "Undone" : "Done"}</button>
                                                    <button onClick={() => this.props.handleDelete(a)} className="btn btn-danger">Remove</button>

                                                </div>
                                            </li>
                                        );
                                    }
                                    )

                                }
                            </ul>
                    }
                    <div className="todos-actions row">
                        <div className="col-sm-4">Total Activities: {this.props.todoList.length}</div>
                        <div className="col-sm-8">
                            <button onClick={this.props.handleAll}>All</button>
                            <button onClick={this.props.handleActive}>Active</button>
                            <button onClick={this.props.handleCompleted}>Completed</button>
                            <button onClick={this.props.handleClear}>Clear List</button>
                        </div>
                    </div>
                </div>

            </React.Fragment>

        );
    }
}
export default TodoList;
