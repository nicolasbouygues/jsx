import '../style/SearchedWine.css'
import React from 'react';

const SearchedWine = (props) => {
    return (
        <div className="searched_wine">
            <h1>{props.name}</h1>
        </div>
    )
}

export default SearchedWine