import React, { Component } from 'react';
import {Card, Button, Badge} from 'react-bootstrap';

class MovieCard extends Component {
    render() {
        const {movie} = this.props;

        return (
            <Card id={movie.id} className="movieCard bg-light border-warning text-dark mb-4 mr-4 position-relative" style={{minWidth: '250px', maxWidth: '500px'}}>
                <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}/>
                
                {/* There was a bug with Card.ImgOverlay, it made the button unclickable: https://github.com/reactstrap/reactstrap/issues/1277 */}
                <h2 className="position-absolute" style={{right: "20px", top:"15px"}}>
                    <Badge variant="warning">{movie.vote_average}</Badge>
                </h2>               
                <Card.Body className="d-flex flex-column justify-content-between">   
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text style={{maxHeight: "150px", overflow: "hidden"}}>
                        {movie.overview} 
                    </Card.Text>
                    <Card.Text className="fs-italic">
                    Release date: {movie.release_date}
                    </Card.Text>
                    <Button href={"/movie/" + movie.id} variant="dark" block>More info</Button>            
                </Card.Body>
            </Card>   
        );
    }
}

export default MovieCard;