import React from "react";
import './searchbar.css'

class Searchbar extends React.Component {
    render() {
        return (
            <div class="search">
                <p>Search :</p>
                <input></input>
                <button>GO</button>
            </div>
        )
    }
}

export default Searchbar;