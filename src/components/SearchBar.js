import '../style/SearchBar.css'
import React from 'react';

class SearchBar extends React.Component {
    state = { 
        first_ing: '',
        second_ing: '' 
    };
    
    onFormSubmit = (event) => {
        event.preventDefault()
        this.props.onSubmit(this.state.first_ing, this.state.second_ing)
    }

    render() {
        return (
            <div className="search_bar">
                <form onSubmit={this.onFormSubmit}>
                    <label>Cherchez votre vin</label>
                    <input className="input_first_ing" 
                        type="text"
                        name="first_ing" 
                        placeholder="First ingredient" 
                        value={this.state.first_ing} 
                        onChange={e => this.setState({[e.target.name]: e.target.value})}
                    />
                        <input className="input_first_ing" 
                        type="text"
                        name="second_ing" 
                        placeholder="First ingredient" 
                        value={this.state.second_ing} 
                        onChange={e => this.setState({[e.target.name]: e.target.value})}
                    />
                    <button className="button_search_bar" name="search">Submit</button>
                </form>
            </div>
        )
    }
}

export default SearchBar