import React from 'react';
import { useState, useEffect } from 'react';
import Movies from './components/Movies';
import MoviesHeading from './components/MoviesHeading';
import PageHeading from './components/PageHeading';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SearchBar from './components/SearchBar';
import Details from './components/Details';
import DetailsShow from './components/DetailsShow';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('summer');
    const [selectedMovie, setSelectedMovie] = useState('');

    const requestMovie = async () => {
        const url = `https://www.omdbapi.com/?s=${search}&apikey=4d56e82c`;
        const response = await fetch(url);
        const resJson = await response.json();
        if(resJson.Search){
            setMovies(resJson.Search);
        }
    }

    useEffect (() => {
        requestMovie(search);
    }, [search]);

    const handleInfoClick = (movie) => {
        setSelectedMovie(movie);
    }

    return (
        <div className='container-fluid movie-container'>

            {/* Page Heading */}
            <div className='row'>
                <PageHeading heading="StreamWizard" />
                <SearchBar search={search} setSearch={setSearch}/>
            </div>
            <br/>
            <br/>

            {/* Search Results */}
            <div className='row'>
                <MoviesHeading head="Top Results" />
            </div>

            <div className='movie'>
                <Movies movies = {movies}
                handleInfoClick = {handleInfoClick}
                Details = {Details}/>
            </div>
            <br/>
            <br/>

            {/* Selected Movie Info */}
            <div className='row'>
                <h2>Click on a movie for more info</h2>
            </div>

            <div className='row'>
                {selectedMovie && <DetailsShow movie={selectedMovie} />}
            </div>

        </div>
    );
}

export default App;