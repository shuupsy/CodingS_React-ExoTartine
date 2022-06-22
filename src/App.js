import React from 'react';
import './style.css';
import Header from './components/header.js';
import Article from './components/article.js';
import Footer from './components/footer.js';

function App() {
  return (
    <div className="App">
        <Header/>
        <Article/>
        <Footer/>
    </div>
  );
}

export default App;
