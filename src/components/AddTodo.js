import React, { Component } from 'react'

 class AddTodo extends Component {
    render() {
        return (
        
            <form style={{display: 'flex'}}>
             <input  
             type="text"
             name="title"
             style={{flex: '10', padding: '5px'}}
        
             placeholder="add todo..."/>
             <input
             type='submit'
             value="Add"
             style={{flex: '1'}}
             className="btn"
            
             />
            </form>
        
        )
    }
}

export default AddTodo;
