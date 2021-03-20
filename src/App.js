import React, {Component} from 'react';
import './App.css';

import Title from './Title/Title';
import SearchBox from './SearchBox/SearchBox';
import Content from  './Content/Content';
import henryOne from './images/henryone.jpg';
import henrySeven from './images/henryseven.jpg';


const BOOKS= [
  {"bookTitle":"Henry 1","author":"C.Warren Hollister","price":"$50.00","description":"The resulting volume is one that will be welcomed by students and general readers alike","bookImage": `${henryOne}`},
  {"bookTitle":"Henry 7","author":"Alison Weir","price":"$15.50","description":"This is a triumph of historical writing which will appeal equally to the general reader and the serious historian","bookImage": `${henrySeven}`}
];

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
    // const url = 'https://www.googleapis.com/books/v1/volumes?q=' + queryTerm + '&filter='+ bookTypeTerm + '&printType='+ printTypeTerm + '&key=AIzaSyAOy8yTeY5w1IYGorjb2J51v5W2VPy_AjA';
    console.log('fetching data...');
    fetch(url)
    .then(res => {
      if(!res.ok){
        throw new Error('Something went wrong, please try again later');
      }
      return res;
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      // if(data.totalItems === 0){
      //   this.setState({
      //     error: null
      //   });
      // }else{
        console.log(data.items);
        this.setState({
          currentBooks: data.items,
          error: null
        });
      // }
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

  // componentDidUpdate(){
  //   this.fetchGoogleData();
  // }

  updateSearchData(term, bfilter, pfilter){
    const newTerm = term;
    const bfilterTerm = bfilter;
    const pfilterTerm = pfilter;
    // this.setState({
    //   searchTerm: newTerm
    // });
    this.setState({
      searchTerm: newTerm,
      bookType: bfilterTerm,
      printType: pfilterTerm
    },
      () =>this.fetchGoogleData() );
  }

  // updateFilterData(bfilter, pfilter){
  //   const bfilterTerm = bfilter;
  //   const pfilterTerm = pfilter;

  //   this.setState({
  //     bookType: bfilterTerm,
  //     printType: pfilterTerm
  //   }, )
  // }

  render(){
    let displayContent;
    if(this.state.currentBooks === undefined){
      displayContent = <div> No such book is available. </div>;
    }else{
      displayContent =   <Content books={this.state.currentBooks}  />;
    }


    return (
      <div className='App'>
        <Title />
        <SearchBox  passGoogleDataUpdate = {() => this.fetchGoogleData()} updateTerm = {(term, bfilter, pfilter) => this.updateSearchData(term, bfilter,pfilter)} currentTerm = {this.state.searchTerm} currentBFilter = {this.state.bookType} currentPFilter = {this.state.printType}/>
        {/* if(currentContent === undefined){
          <div>No content avail</div>
        }else{
          <Content books={this.state.currentBooks}  />  
        } */}

        {displayContent}
    
      </div>
    );
  }
}

export default App;