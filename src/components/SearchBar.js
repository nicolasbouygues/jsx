import '../style/SearchBar.css'
import React from 'react';

class SearchBar extends React.Component {
    state = { term: ''};
    
    onFormSubmit = (event) => {
        event.preventDefault()
        this.props.onSubmit(this.state.term)
    }

    render() {
        return (
            <div className="search_bar">
                <form onSubmit={this.onFormSubmit}>
                    <label>Cherchez votre vin</label>
                    <input className="input_search_bar" 
                    type="text" 
                    placeholder="un vin" 
                    value={this.state.term} 
                    onChange={e => this.setState({term: e.target.value})}
                    />
                    <button className="button_search_bar" name="search">Submit</button>
                </form>
            </div>
        )
    }
}

export default SearchBar