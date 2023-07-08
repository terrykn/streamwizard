import React from 'react';
import { useEffect, useState } from 'react';

const DetailsShow = (props) => {
    const [movieDetails, setMovieDetails] = useState('');

    useEffect(() => {
        const fetchMovieDetails = async () => {
            const url = `https://www.omdbapi.com/?i=${props.movie.imdbID}&apikey=4d56e82c`;
            const response = await fetch(url);
            const resJson = await response.json();
            setMovieDetails(resJson);
        };

        fetchMovieDetails();
    }, [props.movie.imdbID])

    return (
        <div>
            <br />
            <h5><strong>{props.movie.Title}</strong></h5>
            <p>Release Date: {props.movie.Year}</p>
            {movieDetails && <p>{movieDetails.Plot}</p>}
            {movieDetails && <p>Actors: {movieDetails.Actors}</p>}
            {movieDetails && <p>Director: {movieDetails.Director}</p>}
            {movieDetails && <p>Writer: {movieDetails.Writer}</p>}
            {movieDetails && <p>Language(s): {movieDetails.Language}</p>}
            {movieDetails && <p>Country: {movieDetails.Country}</p>}
            {movieDetails && <p>Runtime: {movieDetails.Runtime}</p>}
            {movieDetails && <p>Genre: {movieDetails.Genre}</p>}
            {movieDetails && <p>Awards: {movieDetails.Awards}</p>}
            {movieDetails && <p>IMDb Rating: {movieDetails.imdbRating}</p>}
            {movieDetails && <p>Box Office: {movieDetails.BoxOffice}</p>}

            
            
        </div>
        
    )
}

export default DetailsShow;