
import React from 'react';
import './Search.css';
import Autocomplete from './Autocomplete';     
import Loader from './Loader';

class SearchBar extends React.Component{

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.doneTyping = this.doneTyping.bind(this);

      }
      state = {
        value: '',  
        typingTimer: 0,
        doneTypingInterval: 1000
    };

    doneTyping(){
        this.props.searchCallback(this.state.value);
    }

    handleChange(event) {
        clearTimeout(this.state.typingTimer);
            this.setState({
                value: event.target.value,
                typingTimer :setTimeout(this.doneTyping, this.state.doneTypingInterval)
            })
           
      }
    

    render() { 
        return (

        <form autoComplete="off" class="search-bar">
           
          <input value={this.state.value} onChange={this.handleChange} type="text" id="search" name="Search" placeholder="Search"></input>
          {/* <div className="loader-container">
              <Loader/>
          </div> */}
         
        </form>
        );
      }

}
export default SearchBar;