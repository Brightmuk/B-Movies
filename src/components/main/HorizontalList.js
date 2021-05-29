import React from 'react'
import './HorizontalList.css';
import MovieCard from './MovieCard';



class HorizontalList extends React.Component {

    constructor(props) {
        super(props);
        this.movieList = props.movies;
      }
      UNSAFE_componentWillReceiveProps(props){
        
        this.movieList = props.movies;
      }
      onSelect = key => {
       
      }

    render(){
        const movies = this.movieList;
        return <div class="horizontal-container">
            {movies.map((movie, index)=>(
             <MovieCard movie={movie} key={movie.id} index={index} />
            ))}
        </div>
    }

};

export default HorizontalList