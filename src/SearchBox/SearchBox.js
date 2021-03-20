import React, {Component} from 'react';
import './SearchBox.css';

import MainSearch from '../MainSearch/MainSearch';
import Filters from '../Filters/Filters';


class SearchBox extends Component{
    render(){
        return(
            <div className="searchBoxContainer">
                <MainSearch passGoogleDataUpdate= {this.props.passGoogleDataUpdate} updateTerm = {this.props.updateTerm} currentBFilter = {this.props.currentBFilter} currentPFilter={this.props.currentPFilter}/>
                <Filters updateTerm = {this.props.updateTerm} currentTerm = {this.props.currentTerm} currentBFilter = {this.props.currentBFilter} currentPFilter={this.props.currentPFilter}/>
            </div>       
        );
    }
}

export default SearchBox;