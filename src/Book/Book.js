import React , { Component } from 'react';
import './Book.css';

import BookTitle from '../BookTitle/BookTitle';
import BookImage from '../BookImage/BookImage';
import BookAuthor from '../BookAuthor/BookAuthor';
import BookPrice from '../BookPrice/BookPrice';
import BookDescription from '../BookDescription/BookDescription';

class Book extends Component{
    render(){
        return(
            <div className="bookContainer">
                <div className="bookTitleContainer">
                    <BookTitle bookTitle={this.props.bookTitle}/>
                </div>
                <div className="detailsBookContent">
                    <div className="detailsBookContentItem">
                        <BookImage bookImage={this.props.bookImage} />
                    </div>
                    <div className="detailsBookContentItem">
                        <div className="detailsBookAuthor">
                            <BookAuthor bookAuthor={this.props.author} />
                        </div>
                        <div className="detailsBookPrice">
                            <BookPrice bookPrice={this.props.price} />
                        </div>
                        <br />
                        <br />
                        <div className="detailsBookDescription">
                            <BookDescription bookDescription={this.props.description} />
                        </div>
                    </div>                 
                </div>
            </div>
        );
    }
}

export default Book;