import React, { Component } from 'react'
import Mustaf from '../image/mustaf1.jpg'


class Contact extends Component {
    render() {
        return (
            <React.Fragment>
                <h1 style={titleStyle}>Welcome to contact me.</h1>
                <h2 style={contacInfo}>Contact Information.</h2>
                <div style={contactStyle}>
                <h3>Name:   Mustaf Ahmed</h3>
                <h3>Phone:  00962786707948</h3>
                <h3>Email:  mustafdirie1@gmail.com</h3>
                </div>
                
            </React.Fragment>
         
        )
    }
}

const titleStyle = {
    color: 'white',
    textAlign: 'center',
    padding : '10px'
}
const contacInfo = {
    color: 'black',
    textAlign: 'left',
 
}
const contactStyle = {
    color: 'blue',
    textAlign: 'left',
    padding : '10px'
}

export default Contact;
