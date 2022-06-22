import React from 'react';
import './main.css'
import Article from './article.js';

class Main extends React.Component {
    nombreArticle = 2;
    render() {
        // let nombreArticle = 2;
        if(this.nombreArticle >= 2) {
            return (
                <main>
                    <Article/>
                    <Article/>
                </main>
            )
        } else {
            return(<h1>Il n'y a pas d'article.</h1>)
        }
    }
}

export default Main