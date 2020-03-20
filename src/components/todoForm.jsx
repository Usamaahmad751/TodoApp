import React, { Component } from 'react'
class TodoForm extends Component {
    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.props.addItem}>
                    <input type="text"
                        className="addtodo"
                        placeholder="Write Any Activity"
                        onChange={this.props.handleChange}
                        value={this.props.value}
                    />
                    <input type="submit" value="Add Todo" className="submittodo" />
                </form>
            </React.Fragment>
        );
    }
}
export default TodoForm;
