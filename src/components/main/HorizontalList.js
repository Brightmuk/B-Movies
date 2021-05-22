import React from 'react'
import './HorizontalList.css';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import MovieCard from './MovieCard';

export const MovieList = (list) =>{
 return list.map((data, index )=> {
     console.log(data.id);
    return <MovieCard movie={data} key={data.id} index={index} />;
    }
)}

const ArrowLeft = <span class="material-icons arrows">arrow_back_ios_new</span>;
const ArrowRight = <span class="material-icons arrows">arrow_forward_ios_new</span>;

class HorizontalList extends React.Component {

    constructor(props) {
        super(props);
        this.movieList = MovieList(props.movies);
      }
      UNSAFE_componentWillReceiveProps(props){
        
        this.movieList = MovieList(props.movies);
      }
      onSelect = key => {
       
      }

    render(){
        const movies = this.movieList;
        return (
            <div class="horizontal-container">
              <ScrollMenu
                data={movies}
                arrowLeft={ArrowLeft}
                arrowRight={ArrowRight}
                onSelect={this.onSelect}
              />
            </div>
          );
    }

};

export default HorizontalList