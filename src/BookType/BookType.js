import React, {Component} from 'react';
import './BookType.css';



class BookType extends Component{
    
    changeSelection(value){
        if(value === "noFilter"){
            this.props.updateTerm(this.props.currentTerm, null, this.props.currentPFilter);
        }else{
            this.props.updateTerm(this.props.currentTerm, value, this.props.currentPFilter);
        }
    }

    render(){
        return(
            <div className="bookTypeContainer filtersItem">
                <form className="bookTypeForm">
                    <label htmlFor="bookTypeFilterContent">
                        Book Type:
                    </label>
                    <select id="bookTypeFilterContent" name="bookTypeFilterContent" onChange= {e =>this.changeSelection(e.target.value)}>
                        <option value="noFilter">No Filter</option>
                        <option value="partial">partial</option>
                        <option value="full">full</option>   
                        <option value="free-ebooks">free-ebooks</option> 
                        <option value="paid-ebooks">paid-ebooks</option> 
                        <option value="ebooks">ebooks</option>              
                    </select>
                </form>
            </div>
        );
    }
}

export default BookType;