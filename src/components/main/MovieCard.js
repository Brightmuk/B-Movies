import React from 'react'
import './MovieCard.css';
import { Link,} from "react-router-dom";

const MovieCard = ({movie})=>{

    return <Link to={"movie/"+movie.id}>
    <div className="movie-card" >
        <div className="card-image">
            <img width="200" className="tile-image" src={movie.image}></img>
        </div>
        <div className="card-content">
            {movie.title}
        </div>
    </div>
    </Link>
    
};

export default MovieCard;