import React , { Component } from 'react';
import './BookDescription.css';

class BookDescription extends Component{
    render(){
        return(
            <div>{this.props.bookDescription}</div>
        );
    }
}

export default BookDescription;