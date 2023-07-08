import React from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
    return (
        <div className="col col-sm-4">
            <input 
                className="search-bar-style" 
                placeholder="Search movies..."
                value={props.value}
                onChange = {(e) => props.setSearch(e.target.value)}
            />
        </div>
    )
}

export default SearchBar;