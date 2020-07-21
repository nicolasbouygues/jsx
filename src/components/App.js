import React from 'react';
import SearchBar from './SearchBar.js'
import SearchedWine from './SearchedWine.js'
import MealList from './MealList.js'



class App extends React.Component {
    state = {first_ing: null, second_ing: null, name: null}

    onSearchSubmit = (first_ing, second_ing) => {
      fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${first_ing},+${second_ing}&number=2&apiKey=f32abb28d1db45fca7f1c14f5a2c0281`, {
        "method": "GET"
      })
      .then(response => response.json())
      .then(data => this.setState({name: data[0].title}))
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
      <SearchedWine name={this.state.name} millesime="2018"  />
      <MealList />
      </div>
      )
  }

}

export default App;