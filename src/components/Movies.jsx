import React, { useState } from 'react';
import './Movies.css';
import DetailsShow from './DetailsShow';

const Movies = (props) => {
    const Details = props.Details;

    const handleMovieClick = (movie) => {
        props.handleInfoClick(movie);
    }

    return (<>
        {props.movies.map((movie, index) => 
            <div className='poster'>
                <img src={movie.Poster} alt={movie.Title} className='movie-poster' />
                <div className='overlay d-flex align-items-center' 
                    onClick = {() => handleMovieClick(movie)}>
                    <Details />
                </div>
            </div>
        )}
    </>)
}

export default Movies;