import React , { Component } from 'react';
import './BookImage.css';


class BookImage extends Component{
    render(){
        return(
            <div>
                <img src={this.props.bookImage} alt="text"/>
            </div>
        );
    }
}

export default BookImage;