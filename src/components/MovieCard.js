import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap';

class MovieCard extends Component {
    render() {
        const {movie} = this.props;
        return (
            <Card id={movie.id} className="movieCard bg-light border-warning">
                <Card.Img variant="top" src={"   https://image.tmdb.org/t/p/w300/" + movie.poster_path}/>
                <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>
                    {movie.overview}
                </Card.Text>
                <Button variant="primary">More info</Button>
                </Card.Body>
            </Card>
        );
    }
}

export default MovieCard;