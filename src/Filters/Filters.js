import React, {Component} from 'react';
import './Filters.css';

import PrintType from '../PrintType/PrintType';
import BookType from '../BookType/BookType';


class Filters extends Component{
    render(){
        return(
            <div className="filtersContainer">
                <PrintType />
                <BookType />
            </div>
        );
    }
}

export default Filters;