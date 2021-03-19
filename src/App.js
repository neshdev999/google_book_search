import React from 'react';
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


function App() {
  return (
    <div className='App'>
      <Title />
      <SearchBox />
      <Content books={BOOKS} />
 
      
    </div>
  );
}

export default App;