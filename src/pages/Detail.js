import React, { Component } from 'react';
import {API_KEY, URL_DETAIL} from '../config';
import axios from 'axios';

class Detail extends Component {

    state = {};

    componentDidMount(){
        const movieId = this.props.match.params.id;

        axios.get(URL_DETAIL + movieId + "?api_key=" + API_KEY)
        .then(res => {
            this.setState({movieDetail: res.data});
            this.setState({
                backdrop: "https://image.tmdb.org/t/p/w1280/" + 
                res.data.backdrop_path
            });
        });
    }


    render() {

        const jumbo = {
            backgroundImage: `url(${this.state.backdrop})`,
            backgroundSize: "cover",
            position: "relative"
        };
        return (
            <div className="container">
                <div style={jumbo} className="jumbotron">
                    <div style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            backgroundColor: "rgba(240,255,255,0.6)"
                        }}  
                    />
                </div>
            </div>
        );
    }
}

export default Detail;