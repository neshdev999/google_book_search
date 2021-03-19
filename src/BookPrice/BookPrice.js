import React , { Component } from 'react';
import './BookPrice.css';

class BookPrice extends Component{
    render(){
        return(
            <div>{this.props.bookPrice}</div>
        );
    }
}

export default BookPrice;