import React, { Component } from 'react';
import axios from 'axios';
import { API_KEY } from '../config';
import MovieCard from '../components/MovieCard';
import { Container, CardGroup } from 'react-bootstrap';


class Home extends Component {
    
    // Declared state at the start
    state = {
        currentPage: 1,
        movies: []
    }

    componentDidMount(){
        axios.get("https://api.themoviedb.org/3/discover/movie?api_key=" + API_KEY + "&sort_by=popularity.desc").then(response => {
            console.log(response.data);
            
            // Put axios data in state
            this.setState({
                currentPage: response.data.page,
                totalPages: response.data.total_pages,
                movies: response.data.results
            });
            console.log(this.state);
        });
    }
    
    render() {
        const {movies} = this.state;

        return (
            <div>
                <Container>
                    <h1>Home</h1>
                    <CardGroup>
                    {movies.map((movie) =>
                        <MovieCard key={movie.id} movie={movie}/>
                    )}
                    </CardGroup>
                        
                </Container>
                
                
                
            </div>
        );
    }
}

export default Home;