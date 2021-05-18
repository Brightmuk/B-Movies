import React, {Component} from 'react';
import Movies from './components/main/Movies';
import './App.css';
import Nav from './components/shared/Nav';

class App extends Component {
    render() {
        return (
            <div class ="page-container">
                <Nav/>
                <Movies movies={this.state.movies} />
            </div>
        )
    }

    state = {
        movies: []
    };

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then((data) => {
                this.setState({ movies: data })
            })
            .catch(console.log)
    }
}

export default App;
