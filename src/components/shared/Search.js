
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
        doneTypingInterval: 1000,
        loading:false
    };


    doneTyping(){
        this.props.searchCallback(this.state.value);
        this.setState({loading:true});
    }

    handleChange(event) {
        clearTimeout(this.state.typingTimer);
            this.setState({
                loading:false,
                value: event.target.value,
                typingTimer :setTimeout(this.doneTyping, this.state.doneTypingInterval)
            })
           
      }
    UNSAFE_componentWillReceiveProps(props){
        console.log('new val'+props.loading)
       this.setState({
           loading: false
       })
    }

    render() { 
      console.log(this.state.loading);
        return (

        <form autoComplete="off" className="search-bar">
           <div className="search-container">
          <input value={this.state.value} 
           onChange={this.handleChange} 
           type="text" 
           id="search"
           name="Search"
           placeholder="Search">

           </input>
           {this.state.loading&&this.state.value.length>1?  <Loader/>:<div></div>}
           </div>
         
        </form>
        );
      }

}
export default SearchBar;