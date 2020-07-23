import '../style/MealList.css'
import React from 'react';

const MealList = props => {
    const images = props.images.map((image) => {
        return <img key={image.id} src={image.image} alt=""/>
    });
    const text = props.images.map((title) => {
        return <p key={title.id}>{title.title}</p>
    });
    return (
        <div>{images} {text}</div>
    )
}

export default MealList 



