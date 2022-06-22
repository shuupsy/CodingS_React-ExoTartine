import React from 'react';
import './navigation.css'

class Navigation extends React.Component {
    navigation = (destination) => { console.log(destination)}
    render() {
        return (
            <nav>
                <button onClick={() => this.navigation("Accueil")}>Link 1</button>
                <button onMouseOver={() => this.navigation("Galerie")}>Link 2</button>
                <button>Link 3</button>
            </nav>
        )
    }
}

export default Navigation;