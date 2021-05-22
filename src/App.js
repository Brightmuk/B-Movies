import React, {Component} from 'react';
import HorizontalList from './components/main/HorizontalList';
import './App.css';
import Nav from './components/shared/Nav';
import SearchBar from './components/shared/Search';

const apiKey = "a307e8eddfmsh2a33e3d638138dcp17c32cjsne44e5a3808fc";
const apiHost = "imdb-internet-movie-database-unofficial.p.rapidapi.com";


// const searchMovie = async(searchTerm)=>{
   
//     fetch(`https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/${searchTerm}`,
//     {
//         method:'GET',
//         headers:{
//             "x-rapidapi-key":apiKey,
//             "x-rapidapi-host": apiHost,
//             "useQueryString": true
//         }
//      }
//     )
//     .then(res => res.json())
//     .then((data) => {
//         console.log(data);
//         return data;
//     })
//     .catch(console.log)
//         return null;
// }

class App extends Component {

    state = {
        movies: [],
        selected: '',
        searchTerm:'',
    }

    searchMovie = (searchTerm)=>{
   
        fetch(`https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/${searchTerm}`,
        {
            method:'GET',
            headers:{
                "x-rapidapi-key":apiKey,
                "x-rapidapi-host": apiHost,
                "useQueryString": true
            }
         }
        )
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            this.setState({movies: data.titles})
        })
        .catch(console.log)
            return null;
    }

    handleCallback = (term) =>{
      this.setState({searchTerm: term})
      this.searchMovie(term)
   
    }

    render() {
     
        return (
            
            <div className ="page-container">
                <div class="page-content">
                <div class="nav-logo text-center" >B Movies</div>
                <SearchBar searchCallback = {this.handleCallback}/>
                { this.state.searchTerm.length>1? <div class="heading">RESULTS FOR "{this.state.searchTerm}"</div>:<div class="heading">POPULAR SEARCHES</div>}
               {this.state.searchTerm.length>1?
               <HorizontalList movies={this.state.movies} />
                :
                <div>Popular searches</div>
                // <Async promiseFn={searchMovie(this.searchTerm)}>
                // {({ data, err, isLoading }) => {
                //     if(isLoading) return <div>Loading...</div>
                //     if(err) return <div>An error occurred</div> 
                //     if(data)
                //     return <HorizontalList movies={data} selected={this.state.selected} />
                // }}
                // </Async>
                }
               
                </div>
            </div>
        )
    }



    // componentDidMount() {
    //     fetch('https://imdb8.p.rapidapi.com/title/get-most-popular-movies',
    //         {
    //             method:'GET',
    //             headers:{
    //                 "x-rapidapi-key":'a307e8eddfmsh2a33e3d638138dcp17c32cjsne44e5a3808fc',
    //                 "x-rapidapi-host":'imdb8.p.rapidapi.com',
    //                 "useQueryString": true
    //             }
    //         }
    //         )
    //         .then(res => res.json())
    //         .then((data) => {
    //            console.log(data);
    //             this.setState({
    //                  movies: typeof(data)=="object"?data:[]
    //                 })
    //         })
    //         .catch(console.log)
    // }
}

export default App;
