import Header from './components/layout/Header';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import { v4 as uuidv4 } from 'uuid';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import About from './components/pages/About'



import React, { Component } from 'react'

export class App extends Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: "take your time",
        completed: false
      },
      {
        id: uuidv4(),
        title: "its dinner time",
        completed: false
      },
      {
        id: uuidv4(),
        title: "lets meet for tommorow",
        completed: false
      }
    ]
  }
  // Toggle Complete
  markComplete = (id) => {
    console.log(id)
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed

        }
        return todo
      }
      )

    })

  }
  //Delete  Todo
  deleteMark = (id) => {
    console.log('id___', id)
    this.setState({
      todos: [...this.state.todos.filter((todo) =>
        todo.id !== id


      )]
    })

  }
  // add todo

  addTodo = (title) => {
    //console.log(title)
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })

  }



  render() {
    // console.log("State",this.state.todos)
    return (
      <Router>
        <div>
          <div className="container">
            <Header
            />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos
                  listItem={this.state.todos}
                  markComplete={this.markComplete}
                  deleteId={this.deleteMark}
                />
              </React.Fragment>
            )}
            />
            <Route
              path='/about' component={About}
            />
          </div>
        </div>
      </Router>
    )
  }
}

export default App


