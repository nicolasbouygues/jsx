import React from 'react';
import SearchBar from './SearchBar.js'
import SearchedWine from './SearchedWine.js'
import MealList from './MealList.js'



class App extends React.Component {
    state = {term: null}

    onSearchSubmit(term) {
      fetch(`https://api.spoonacular.com/food/wine/dishes?wine=${term}&apiKey=f32abb28d1db45fca7f1c14f5a2c0281`, {
        "method": "GET"
      })
      .then(response => {
        console.log(response);
      })
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
      <SearchedWine name="Gevrey Chambertin" millesime="2018"  />
      <MealList />
      </div>
      )
  }

}

export default App;