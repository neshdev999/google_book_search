import React , { Component } from 'react';
import './BookAuthor.css';

class BookAuthor extends Component{
    render(){
        return(
            <div>{this.props.bookAuthor}</div>
        );
    }
}

export default BookAuthor;