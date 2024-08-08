import React from 'react'
import './HorizontalList.css';
import MovieCard from './MovieCard';


const HorizontalList = ({movieList})=>{
  console.log(movieList)
  
  const movies = movieList??[];   
      return <div className="horizontal-container">
          {movies.map((movie)=>(
            
            <MovieCard movie={movie} key={movie.id}/>
          ))}
      </div>

};

export default HorizontalList