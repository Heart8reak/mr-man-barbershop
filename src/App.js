import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import Header from './components/Header';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import GalleryPage from './components/AboutPage';
import ServicePage from './components/ServicePage';
import ContactPage from './components/ContactPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={HomePage}></Route>
      <Route path="/about" component={AboutPage}></Route>
      <Route path="/gallery" component={GalleryPage}></Route>
      <Route path="/service" component={ServicePage}></Route>
      <Route path="/contact" component={ContactPage}></Route>
      <HomePage />
    </div>
  );
}

export default App;
