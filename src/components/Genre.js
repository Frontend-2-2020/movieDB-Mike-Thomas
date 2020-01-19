import React from 'react';

export default function Genre(props){
    return(
        <span className="badge badge-secondary mb-1 mr-1">{props.genre}</span>
    )
}