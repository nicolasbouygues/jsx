import '../style/SearchedWine.css'
import React from 'react';

const SearchedWine = (props) => {
    return (
        <div className="searched_wine">
            <h1>{props.title}</h1>
        </div>
    )
}

export default SearchedWine