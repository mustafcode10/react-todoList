import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {

   getStyle =()=>{
       return {
        background: "#f4f4f4",
        padding: "10px",
        borderBottom: "1px #ccc dotted",
        textDecoration: this.props.todoItem.completed ? 'line-through' : 'none'
       }
   }
   delMark =()=>{
       console.log('del')
   }



    render() {
        //console.log('props TodoItem', this.props.todoItem)
        const {title, id} = this.props.todoItem
        //console.log('this.props', this.props)
        // console.log('markComplete_', this.props.markComplete)
        return (
        <div style = {this.getStyle()}>
        <p>
            <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />{' '}
            {title}
            <button style ={btnStyle} onClick={this.props.deleteIdItem.bind(this, id)}>X</button>
        </p>
        
        </div>
        )
        
    }
}

//PropTypes
TodoItem.propTypes = {
    todoItem: PropTypes.object.isRequired
}

const btnStyle = {
    background:'#ff0000',
    color: '#fff',
    border: 'none',
    float: 'right',
    borderRadius: '50%',
    padding: '5px 10px',
    cursor: 'pointer'
}



export default TodoItem
