import React, { Component } from 'react'
import Mustaf from '../image/mustaf1.jpg'


class Contact extends Component {
    render() {
        return (
            <React.Fragment>
                <h1 style={titleStyle}>Welcome to contact me.</h1>
                <h2 style={contacInfo}>Contact Info.</h2>
                <div style={contactStyle}>
                <h3>Name:   Mustaf Ahmed</h3>
                <h3>Phone:  00962786707948</h3>
                <h3>Email:  mustafdirie1@gmail.com</h3>
                </div>

                <img src={Mustaf} />
            
                <p style={linkStyle}>
                <a href="https://www.linkedin.com/in/mustaf-abtidon-135620179/">Visit my LinkedIn</a> And
                < a href="https://github.com/mustafcode10?tab=repositories"> My Github</a>
                </p>
                
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
const linkStyle = {
    textAlign: 'center',
    color: 'white'
}

export default Contact;
