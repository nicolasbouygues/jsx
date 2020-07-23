import '../style/MealList.css'
import React from 'react';

class MealList extends React.Component {
    state = {recipe_id: null };

    onRecipeClick = (event, key) => {
        console.log(key)
        this.setState({recipe_id: 10})
        this.props.onClick(this.state.recipe_id)
    }

    render() {
        return(
                this.props.images.map((image) => {
                    return (
                        <div className="card-product">
                            <img key={image.id} src={image.image} alt="" onClick={this.onRecipeClick(image.id)}/>
                            <div className="card-product-infos">
                                <h2 key={image.id}>{image.title}</h2>
                                <p>Product description with <strong>relevant info</strong> only.</p>
                            </div>
                        </div>
                    )})
                )
}
}

export default MealList 







