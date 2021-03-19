import React, {Component} from 'react';
import './PrintType.css';

class PrintType extends Component{
    render(){
        return(
            <div className="printTypeContainer filtersItem">
                <form className="printTypeForm">
                    <label htmlFor="printTypeFilterContent">
                        Print Type:
                    </label>
                    <select id="printTypeFilterContent" name="printTypeFilterContent">
                        <option value="all">all</option>
                        <option value="books">books</option>
                        <option value="magazines">magazines</option>                
                    </select>
                </form>
            </div>
        );
    }
}

export default PrintType;