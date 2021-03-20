import React , { Component } from 'react';
import './Book.css';

import BookTitle from '../BookTitle/BookTitle';
import BookImage from '../BookImage/BookImage';
import BookAuthor from '../BookAuthor/BookAuthor';
import BookPrice from '../BookPrice/BookPrice';
import BookDescription from '../BookDescription/BookDescription';

class Book extends Component{

    render(){
        const currentBookPriceTag = this.props.saleInfo.saleability === "FOR_SALE" ? ("$" + this.props.saleInfo.listPrice.amount) : this.props.saleInfo.saleability;
        return(
            <div className="bookContainer">
                <div className="bookTitleContainer">
                    <BookTitle bookTitle={this.props.volumeInfo.title}/>
                </div>
                <div className="detailsBookContent">
                    <div className="detailsBookContentItem">
                        <BookImage bookImage={this.props.volumeInfo.imageLinks.thumbnail} />
                    </div>
                    <div className="detailsBookContentItem">
                        <div className="detailsBookAuthor">
                            <BookAuthor bookAuthor={this.props.volumeInfo.authors} />
                        </div>
                        <div className="detailsBookPrice">
                            <BookPrice bookPrice={currentBookPriceTag} />
                        </div>
                        <br />
                        <br />
                        <div className="detailsBookDescription">
                            <BookDescription bookDescription={this.props.volumeInfo.description} />
                        </div>
                    </div>                 
                </div>
            </div>
        );
    }
}

export default Book;