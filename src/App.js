import React, {Component} from 'react';
import './App.css';

import Title from './Title/Title';
import SearchBox from './SearchBox/SearchBox';
import Content from  './Content/Content';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentBooks: [],
      searchTerm: 'flowers',
      printType: 'all',
      bookType: null
    }
  }

  fetchGoogleData(){
    let queryTerm = this.state.searchTerm;
    let printTypeTerm = this.state.printType;
    let bookTypeTerm = this.state.bookType;
    let url;
    if(bookTypeTerm === null){
       url = 'https://www.googleapis.com/books/v1/volumes?q=' + queryTerm + '&printType='+ printTypeTerm + '&key=AIzaSyAOy8yTeY5w1IYGorjb2J51v5W2VPy_AjA';
    }else{
       url = 'https://www.googleapis.com/books/v1/volumes?q=' + queryTerm + '&filter='+ bookTypeTerm + '&printType='+ printTypeTerm + '&key=AIzaSyAOy8yTeY5w1IYGorjb2J51v5W2VPy_AjA';
    }

    fetch(url)
    .then(res => {
      if(!res.ok){
        throw new Error('Something went wrong, please try again later');
      }
      return res;
    })
    .then(res => res.json())
    .then(data => {
        this.setState({
          currentBooks: data.items,
          error: null
        });
    })
    .catch(err => {
      this.setState({
        error: err.message
      });
    });
  }

  componentDidMount(){
    this.fetchGoogleData();
  }

  updateSearchData(term, bfilter, pfilter){
    const newTerm = term;
    const bfilterTerm = bfilter;
    const pfilterTerm = pfilter;
    this.setState({
      searchTerm: newTerm,
      bookType: bfilterTerm,
      printType: pfilterTerm
    },
      () =>this.fetchGoogleData() );
  }

  render(){
    let displayContent;
    if(this.state.currentBooks === undefined){
      displayContent = <div>No such book is available.</div>;
    }else{
      displayContent = <Content books={this.state.currentBooks}  />;
    }
    return (
      <div className='App'>
        <Title />
        <SearchBox  passGoogleDataUpdate = {() => this.fetchGoogleData()} updateTerm = {(term, bfilter, pfilter) => this.updateSearchData(term, bfilter,pfilter)} currentTerm = {this.state.searchTerm} currentBFilter = {this.state.bookType} currentPFilter = {this.state.printType}/>
        {displayContent}    
      </div>
    );
  }
}

export default App;