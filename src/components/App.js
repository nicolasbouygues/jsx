import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar.js'
import SearchedWine from './SearchedWine.js'
import MealList from './MealList.js'



class App extends React.Component {
    state = {term: null}

    onSearchSubmit(term) {
        axios.get(`https://cors-anywhere.herokuapp.com/https://www.1jour1vin.com/fr/guide-achat-vin/${term}`) , {
            headers: {
                Authorization: Token {d9a3bd17e9fb91bbd093779201242f8afeb3b998}
            }
        }
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