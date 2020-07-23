import React from 'react';
import SearchBar from './SearchBar.js'
import SearchedWine from './SearchedWine.js'
import MealList from './MealList.js'



class App extends React.Component {
    state = {first_ing: null, second_ing: null, recipes: []}

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
    wine() {

    }

  render() {
    return ( 
      <div>
      <SearchBar onSubmit={this.onSearchSubmit}/>
      <SearchedWine />
      <MealList images={this.state.recipes} />
      </div>
      )
  }

}

export default App;