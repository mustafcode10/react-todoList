import Header from './components/layout/Header'
import './App.css'
import Todos from './components/Todos'


import React, { Component } from 'react'

export class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "take your time",
        completed: false
      },
      {
        id: 2,
        title: "its dinner time",
        completed: false
      },
      {
        id: 3,
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



  render() {
    // console.log("State",this.state.todos)
    return (
      <div>
         <Header />
        <Todos
          listItem={this.state.todos}
          markComplete={this.markComplete}
          deleteId={this.deleteMark}
        />
      </div>
    )
  }
}

export default App


