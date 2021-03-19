import React , { Component } from 'react';
import './BookList.css';

import Book from '../Book/Book';


class BookList extends Component{
    render(){
        const list = this.props.books.map((book, key) => <Book {...book} key = {key}/>);
        return(
            <div className="bookListContainer">
                {list}
            </div>
        );
    }
}

export default BookList;