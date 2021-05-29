import React from 'react'
import './MovieCard.css';
import { Link, useHistory } from "react-router-dom";

class MovieCard extends React.Component {

    constructor(props){
        super(props);
       
        this.movie = props.movie;
        this.index = props.index;
    }
    viewMovie = (title)=>{
        console.log(title);
    }
    
     render(){
        return <Link to={"movie/"+this.movie.id}>
        <div className="movie-card" onClick={this.viewMovie}>
            <div class="card-image">
                <img width="200" className="tile-image" src={this.movie.image}></img>
            </div>
            <div className="card-content">
                {this.movie.title}
            </div>
        </div>
        </Link>
    }
};

export default MovieCard;