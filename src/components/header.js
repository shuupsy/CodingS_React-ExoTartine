import React from 'react';
import Navigation from './navigation';
import Searchbar from './searchbar';
import './header.css'

class Header extends React.Component {
    render() {
        return(
            <header>
                <Navigation/>
                <Searchbar/>
            </header>
        )
    }
}

export default Header;