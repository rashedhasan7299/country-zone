import React from 'react';
import './Search.css';

const Search = (props) => {
    return (
        <div className='mainBar'>
            <div className='searchBar'>

            </div>
            <div className='selected'>
            <h5>No. of Favorite Countries: {props.favorites.length}</h5>
            </div>
        </div>
    );
};

export default Search;