import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Featured from './components/Featured';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Featured/>
      <Footer/>
    </div>
  );
}

export default App;
