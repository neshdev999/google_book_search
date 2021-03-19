import React , { Component } from 'react';
import './BookTitle.css';

class BookTitle extends Component{
    render(){
        return(
            <h2>{this.props.bookTitle}</h2>
        );
    }
}

export default BookTitle;