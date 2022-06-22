import React from 'react';
import tartine from './tartine.png'
import './article.css';

class Article extends React.Component {
    render() {
        return (
            <main>
            <div class="article">
                <img src={tartine} alt="tartine"/>
                <div class="texte">
                    <button>Quel est le titre</button>
                    <h2>Mon premier article</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic quae culpa voluptate dolorum facilis repellendus natus harum quam pariatur dolor quo maxime voluptates nesciunt tenetur similique, eaque rerum quod ad deleniti quisquam odio officiis. In voluptates, aliquid voluptate laborum earum laudantium consequuntur perspiciatis veritatis quis minima fugiat, a totam reiciendis!</p>
                </div>
            </div>
            <div class="article">
                <img src={tartine} alt="tartine"/>
                <div class="texte">
                    <button>Quel est le titre</button>
                    <h2>Mon deuxième article</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic quae culpa voluptate dolorum facilis repellendus natus harum quam pariatur dolor quo maxime voluptates nesciunt tenetur similique, eaque rerum quod ad deleniti quisquam odio officiis. In voluptates, aliquid voluptate laborum earum laudantium consequuntur perspiciatis veritatis quis minima fugiat, a totam reiciendis!</p>
                </div>
            </div>
            </main>
        )
    }
}

export default Article;