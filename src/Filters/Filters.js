import React, {Component} from 'react';
import './Filters.css';

import PrintType from '../PrintType/PrintType';
import BookType from '../BookType/BookType';


class Filters extends Component{
    render(){
        return(
            <div className="filtersContainer">
                <PrintType updateTerm = {this.props.updateTerm} currentTerm = {this.props.currentTerm} currentBFilter = {this.props.currentBFilter} currentPFilter={this.props.currentPFilter}/>
                <BookType updateTerm = {this.props.updateTerm} currentTerm = {this.props.currentTerm} currentBFilter = {this.props.currentBFilter} currentPFilter={this.props.currentPFilter}/>
            </div>
        );
    }
}

export default Filters;