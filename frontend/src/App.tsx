import React from 'react';
import './App.css';
import { BlogPostController, BlogPostView } from './Components/BlogPost/index';

function App() {
  return (
    <div className="App">
      <div className="Header">
        <img src="./header.png" style={{width: '1000px', height: 'auto'}} alt="Gavin's BlogPost"/>
      </div>
      <BlogPostController/>
    </div>
  );
}

export default App;
