import React from 'react';
import ReactDOM from 'react-dom'
import SearchBar from './components/SearchBar.js'
import SearchedWine from './components/SearchedWine.js'
import MealList from './components/MealList.js'


class App extends React.Component {
    state = {name: null}
 
  render() {
    return (
      <div>
      <SearchBar />
      <SearchedWine name="Gevrey Chambertin" millesime="2018"  />
      <MealList />
      </div>
      )
  }

}

ReactDOM.render(<App />, document.querySelector('#root'));
