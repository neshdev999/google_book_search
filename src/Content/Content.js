import React , { Component } from 'react';
import './Content.css';

import BookList from '../BookList/BookList';


class Content extends Component{
    render(){
        return(
            <div className="contentContainer">
                <BookList books={this.props.books}/>
            </div>
        );
    }
}

export default Content;