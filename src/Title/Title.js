import React , { Component } from 'react';
import './Title.css';

class Title extends Component{
    render(){
        return(
            <div className="titleContainer">
                <h1 className="titleContent">Google Book Search</h1>
            </div>     
        );
    }
}

export default Title;