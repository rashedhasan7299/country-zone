import React from 'react';
import './Search.css';

const Search = (props) => {
    // const setSearchTerm = props.setSearchTerm;
    // const searchTerm = props.searchTerm;
    const handleSearchChange = props.handleSearchChange;

    return (
        <div className='mainBar'>
            <div className='searchBar'>
            <input
                type="text"
                placeholder="Search"
                onChange={(event)=> {
                    event.key === "Enter" ? handleSearchChange(event.target.value)
                    : handleSearchChange(event.target.value)}
            }
            />
            </div>
            <div className='selected'>
            <h5>No. of Favorite Countries: {props.favorites.length}</h5>
            </div>
        </div>
    );
};

export default Search;