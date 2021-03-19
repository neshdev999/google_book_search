import React, { Component } from 'react';
import './MainSearch.css';

class MainSearch extends Component{
    render(){
        return(
            <div className="mainSearchContainer">
            <form className="searchForm">
                <label htmlFor="searchInput">
                    Search:
                </label>
                <input type="text" id="searchInput" name="searchInput"/>
                <button type="submit">Search</button>
            </form>
        </div>
        );
    }
}

export default MainSearch;