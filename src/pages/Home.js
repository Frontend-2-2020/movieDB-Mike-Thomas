import React, { Component } from 'react';
import axios from 'axios';
import { API_KEY } from '../config';
import MovieCard from '../components/MovieCard';
import { Container, CardDeck } from 'react-bootstrap';
import Pagination from '../components/Pagination';


class Home extends Component {
    
    // Declared state at the start
    state = {
        currentPage: 1,
        movies: []
    }


    componentDidMount(){
        this.fetchData();
    }

    fetchData = () => {
        axios.get("https://api.themoviedb.org/3/discover/movie?api_key=" + API_KEY + "&sort_by=popularity.desc&page=" + this.state.currentPage).then(response => {
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

    increasePage = () => {
        const newPage = this.state.currentPage + 1;
        console.log(newPage);
        this.setState({
            currentPage: newPage
        },()=> {this.fetchData()});
    }

    decreasePage = () => {
        const newPage = this.state.currentPage - 1;
        console.log(newPage);
        this.setState({
            currentPage: newPage
        },()=> {this.fetchData()});
    }
    
    render() {
        const {movies, currentPage} = this.state;

        

        return (
            <div className="container p-3">
                <Pagination className="sticky" currentPage={currentPage} increasePage={this.increasePage} decreasePage={this.decreasePage}/>
                <CardDeck className="d-flex">
                {movies.map((movie) =>
                    <MovieCard key={movie.id} movie={movie}/>
                )}
                </CardDeck>
            </div>                   

        );
    }
}

export default Home;