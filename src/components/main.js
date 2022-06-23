import React from 'react';
import './main.css'
import Article from './article.js';

function Main (props){
    let soleil = (x) => console.log(x)

    let nombreArticle = 2;
    if(nombreArticle >= 2) {            
        return (
            <main>
                <Article titre="Les tartines" ciel = {(x) => soleil(x)}/>
                <Article titre="Coding School"/>
            </main>
        )
    } else {
        return(<h1>Il n'y a pas d'article.</h1>)
    }
}

export default Main