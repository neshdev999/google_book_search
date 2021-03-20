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
      bookType: 'ebooks'
    }
  }

  fetchGoogleData(){
    let queryTerm = this.state.searchTerm;
    let printTypeTerm = this.state.printType;
    let bookTypeTerm = this.state.bookType;
    const url = 'https://www.googleapis.com/books/v1/volumes?q=' + queryTerm + '&filter='+ bookTypeTerm + '&printType='+ printTypeTerm + '&key=AIzaSyAOy8yTeY5w1IYGorjb2J51v5W2VPy_AjA';
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
      console.log(data.items);
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

  // componentDidUpdate(){
  //   this.fetchGoogleData();
  // }

  updateSearchData(term){
    const newTerm = term;
    // this.setState({
    //   searchTerm: newTerm
    // });
    this.setState({
      searchTerm: newTerm},
      () =>this.fetchGoogleData(this.state.searchTerm) );
  }

  render(){
    return (
      <div className='App'>
        <Title />
        <SearchBox  passGoogleDataUpdate = {() => this.fetchGoogleData()} updateTerm = {term => this.updateSearchData(term)} />
        <Content books={this.state.currentBooks}  />      
      </div>
    );
  }
}

export default App;