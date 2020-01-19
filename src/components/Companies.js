import React from 'react';

export default function CompanyLogo(props){
    return(
        <img className="mr-2" src={"https://image.tmdb.org/t/p/w92" + props.logo_path} alt=""/>
    )
}