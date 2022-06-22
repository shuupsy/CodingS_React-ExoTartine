import React from 'react';
import './style.css';
import Header from './components/header.js';
import Main from './components/main.js'
import Footer from './components/footer.js';

function App() {
  return (
    <div className="App">
        <Header/>
        <Main/>
        <Footer/>
    </div>
  );
}

export default App;
