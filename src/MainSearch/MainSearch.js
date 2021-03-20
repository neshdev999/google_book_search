import React, { Component } from 'react';
import './MainSearch.css';

class MainSearch extends Component{
    constructor(props){
        super(props);
        this.state = {
            term: ""
        };
    }

    termChanged(term){
        this.setState({
            term: term
        });
    }

    handleSubmit(e){
        e.preventDefault();
        console.log(this.state.term);
        this.props.updateTerm(this.state.term, this.props.currentBFilter, this.props.currentPFilter);
       // this.props.passGoogleDataUpdate();
        console.log('button clicked');
    }

    render(){
        return(
            <div className="mainSearchContainer">
            <form className="searchForm" onSubmit={e => this.handleSubmit(e)}>
                <label htmlFor="searchInput">
                    Search:
                </label>
                <input type="text" id="searchInput" name="searchInput" value={this.state.term} onChange={e => this.termChanged(e.target.value)} />
               <input type="submit" value="Search"/>
            </form>
        </div>
        );
    }
}


// <button type="submit">Search</button>
export default MainSearch;