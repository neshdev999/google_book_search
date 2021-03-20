import React, {Component} from 'react';
import './PrintType.css';

class PrintType extends Component{

    changeSelection(value){
            this.props.updateTerm(this.props.currentTerm, this.props.currentBFilter, value);  
    }


    render(){
        return(
            <div className="printTypeContainer filtersItem">
                <form className="printTypeForm">
                    <label htmlFor="printTypeFilterContent">
                        Print Type:
                    </label>
                    <select id="printTypeFilterContent" name="printTypeFilterContent"  onChange= {e =>this.changeSelection(e.target.value)}>
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