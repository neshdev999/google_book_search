import React, {Component} from 'react';
import './SearchBox.css';

import MainSearch from '../MainSearch/MainSearch';
import Filters from '../Filters/Filters';


class SearchBox extends Component{
    render(){
        return(
            <div className="searchBoxContainer">
                <MainSearch passGoogleDataUpdate= {this.props.passGoogleDataUpdate} updateTerm = {this.props.updateTerm}/>
                <Filters />
            </div>       
        );
    }
}

export default SearchBox;