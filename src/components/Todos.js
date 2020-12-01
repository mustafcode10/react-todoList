import React, { Component } from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

export class Todos extends Component {
    render() {
        //console.log("props Todos",this.props.listItem)
        
        return  this.props.listItem.map(
            (todo)=> 
            <TodoItem 
            key={todo.id}
             todoItem={todo}
              markComplete ={this.props.markComplete} 
              deleteIdItem ={this.props.deleteId}
              />
          
            
           
            
        )
            
    }
}

//PropTypes
Todos.propTypes = {
    listItem: PropTypes.array.isRequired
}

export default Todos

