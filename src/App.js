import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import Header from './components/Header';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import GalleryPage from './components/GalleryPage';
import ServicePage from './components/ServicePage';
import FooterPage from './components/FooterPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={HomePage}></Route>
      <Route path="/about" component={AboutPage}></Route>
      <Route path="/gallery" component={GalleryPage}></Route>
      <Route path="/service" component={ServicePage}></Route>
      <FooterPage />
    </div>
  );
}

export default App;
