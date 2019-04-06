import React, { Component } from 'react'
import CreateTodo from './containers/CreateTodo'
import Table from './containers/Table'

class App extends Component {
  render() {
    return (
        <React.Fragment>
            <div className="header"><h1>Todo List App</h1></div>
        <div className="container" >
            <div className="row">
                <div className="todoItem">
                    <CreateTodo />
                </div>
                <Table />
            </div>
        </div>
        </React.Fragment>
    );
  }
}

export default App;
