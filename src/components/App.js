import React from 'react';
import SearchBar from './SearchBar.js'
import SearchedWine from './SearchedWine.js'
import MealList from './MealList.js'



class App extends React.Component {
    state = {first_ing: null, second_ing: null, recipes: [], recipe_id: null, recipe: []}

    onSearchSubmit = (first_ing, second_ing) => {
      fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${first_ing},+${second_ing}&number=10&apiKey=f32abb28d1db45fca7f1c14f5a2c0281`, {
        "method": "GET"
      })
      .then(response => response.json())
      .then(data => this.setState({recipes: data}))
      .catch(err => {
        console.log(err);
      });
    }


    onClickRecipe = (recipe_id) => {
      fetch(`https://api.spoonacular.com/recipes/informationBulk?ids=${recipe_id}&apiKey=f32abb28d1db45fca7f1c14f5a2c0281`, {
        "method": "GET"
      })
      .then(response => response.json())
      .then(data => this.setState({recipe: data}))
      .catch(err => {
        console.log(err);
      });
    }

  render() {
    return ( 
      <div>
      <SearchBar onSubmit={this.onSearchSubmit}/>
      <SearchedWine />
      <MealList images={this.state.recipes} onClick={this.onClickRecipe} />
      </div>
      )
  }

}

export default App;