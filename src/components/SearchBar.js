import '../style/SearchBar.css'
import React from 'react';

const SearchBar = () => {
    return (
        <div className="search_bar">
            <input className="input_search_bar" type="text" placeholder="un vin"/>
            <button className="button_search_bar" name="search">Submit</button>
        </div>
    )
}

export default SearchBar