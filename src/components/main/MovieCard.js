import React from 'react'
import './MovieCard.css';


class MovieCard extends React.Component {

    constructor(props){
        super(props);
       
        this.movie = props.movie;
        this.index = props.index;
    }
    
     render(){
        return <div className="movie-card" >
            <div class="card-image">
                <img width="150" class="tile-image" src={this.movie.image}></img>
            </div>
            <div class="card-content">
                {this.movie.title}
            </div>
        </div>
    }
};

export default MovieCard;