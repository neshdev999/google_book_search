import React, {Component} from 'react';
import './BookType.css';



class BookType extends Component{
    render(){
        return(
            <div className="bookTypeContainer filtersItem">
                <form className="bookTypeForm">
                    <label htmlFor="bookTypeFilterContent">
                        Book Type:
                    </label>
                    <select id="bookTypeFilterContent" name="bookTypeFilterContent">
                        <option value="noFilter">No Filter</option>
                        <option value="partial">partial</option>
                        <option value="full">full</option>   
                        <option value="freeEbooks">free-ebooks</option> 
                        <option value="paidEbooks">paid-ebooks</option> 
                        <option value="ebooks">ebooks</option>              
                    </select>
                </form>
            </div>
        );
    }
}

export default BookType;