import React, { Component } from 'react'
import Header from './components/layout/Header';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
// import { v4 as uuidv4 } from 'uuid';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import About from './components/pages/About'
import Contact from './components/pages/Contact'

import axios from 'axios'





export class App extends Component {
  state = {
    todos: []
  }


  // state = {
  //   todos: [
  //     {
  //       id: uuidv4(),
  //       title: "take your time",
  //       completed: false
  //     },
  //     {
  //       id: uuidv4(),
  //       title: "its dinner time",
  //       completed: false
  //     },
  //     {
  //       id: uuidv4(),
  //       title: "lets meet for tommorow",
  //       completed: false
  //     }
  //   ]
  // }

  componentDidMount =()=>{
    //axios.get('https://jsonplaceholder.typicode.com/todos')
    // todos from jsonplaceholder are 200 item to limit to 10 item use ?_limit=10

    //GET
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    //.then((res) => console.log(res))
    .then((res)=> this.setState({todos: res.data}))

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

  // Delete http request

  deleteMark =id => {
    console.log('id', id)
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>
      this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      })
    );
  };




  // Delete  Todo without http request
  // deleteMark = (id) => {
  //   console.log('id___', id)
  //   this.setState({
  //     todos: [...this.state.todos.filter((todo) =>
  //       todo.id !== id


  //     )]
  //   })

  // }

  // send POST

  addTodo =(title)=>{
    axios.post('https://jsonplaceholder.typicode.com/todos',{
      title:title,
      completed: false
    })
    .then((res)=>this.setState({
      todos: [...this.state.todos, res.data]

    }))

  }

  



  // addTodo without send Post and request back

  // addTodo = (title) => {
  //   //console.log(title)
  //   const newTodo = {
  //     id: uuidv4(),
  //     title: title,
  //     completed: false
  //   }
  //   this.setState({
  //     todos: [...this.state.todos, newTodo]
  //   })

  // }



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
             <Route
              path='/contact' component={Contact}
            />
          </div>
        </div>
      </Router>
   
    )
  }
}

export default App


