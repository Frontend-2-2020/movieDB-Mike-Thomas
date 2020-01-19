import React, { Component } from 'react';
import { API_KEY, URL_DETAIL } from '../config';
import axios from 'axios';
import CompanyLogo from "../components/Companies";
import Genre from "../components/Genre";

class Detail extends Component {

    state = {
        movie: ''
    };
// Hier worden de id's van de movies opgehaald en in movieId gestoken om zo de juiste pagina aan de juiste film
// te koppelen
    componentDidMount() {
        const movieId = this.props.match.params.id;

        axios.get(URL_DETAIL + movieId + "?api_key=" + API_KEY
        ).then(response => {
            this.setState({
                movie: response.data
            });
        });
    }

// Deze code gebruikt map om over elke movie te gaan en de genre's en companylogo's mee te nemen.
// En worden dan elk in een component gestoken
    render() {

        var nestedRender;

        if (this.state.movie) {
            nestedRender = (
                <div>
                    <div className="mt-6 mb-5">
                        {this.state.movie.production_companies.map(post => (
                            <CompanyLogo key={post.id} logo_path={post.logo_path} />
                        ))}
                    </div>
                    <div className="mt-6">
                        {this.state.movie.genres.map(genre => (
                            <Genre key={genre.id} genre={genre.name} />
                        ))}
                    </div>
                </div>
            );
        }

// Opmaak van de jumbotron en detail pagina
        return (
            <div style={{ display: "block" }}>
                <div className="jumbotron" style={{
                    backgroundImage: `url('https://image.tmdb.org/t/p/original${this.state.movie.backdrop_path}')`
                }}
                >
                    <h1 className="display-4 text-light">
                        <span>{this.state.movie.title}</span>{" "}
                        <div className="badge badge-warning" >
                            {this.state.movie.vote_average}
                        </div>
                    </h1>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <img src={"https://image.tmdb.org/t/p/w500" + this.state.movie.poster_path} alt="" />
                        </div>
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                    <p className="text-dark">{this.state.movie.overview}</p>
                                    {nestedRender} 
                                    <p className="badge badge-primary text-white mt-4">
                                        Releasedate: {this.state.movie.release_date}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Detail;