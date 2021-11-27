import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./pages/Home";
import Product from './pages/Product';
import Custom from './pages/Custom';
import AllProducts from './pages/AllProducts';
import Admin from './pages/Admin';
import './App.css';

function App() {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/products' component={AllProducts} />
          <Route exact path='/products/:productId' component={Product} />
          <Route exact path='/custom' component={Custom} />
          <Route exact path='/admin' component={Admin} />
        </Switch>
        <Footer />
      </>
    </Router>


  );
}

export default App;
