import React, {Component} from 'react';
import './SearchBox.css';

import MainSearch from '../MainSearch/MainSearch';
import Filters from '../Filters/Filters';


class SearchBox extends Component{
    render(){
        return(
            <div className="searchBoxContainer">
                <MainSearch />
                <Filters />
            </div>       
        );
    }
}

export default SearchBox;