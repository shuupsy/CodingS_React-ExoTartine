import React from 'react';
import tartine from './tartine.png'
import './article.css';

class Article extends React.Component {
    Props = () => console.log(this.props);
    nuage = 2;
    render() {
        return (
            <div class="article">
                <img src={tartine} alt="tartine"/>
                <div class="texte">
                    <button onClick={this.Props}>Quel est le titre</button>
                    <button onClick={() => this.props.ciel(this.nuage)}>COUCOU CEST MOI</button>
                    <h2>Mon premier article</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic quae culpa voluptate dolorum facilis repellendus natus harum quam pariatur dolor quo maxime voluptates nesciunt tenetur similique, eaque rerum quod ad deleniti quisquam odio officiis. In voluptates, aliquid voluptate laborum earum laudantium consequuntur perspiciatis veritatis quis minima fugiat, a totam reiciendis!</p>
                </div>
            </div>
        )
    }
}

export default Article;