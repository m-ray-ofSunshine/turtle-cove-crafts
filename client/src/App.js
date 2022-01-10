import React, {useEffect, useState, createContext} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./pages/Home";
import Product from './pages/Product';
import Custom from './pages/Custom';
import AllProducts from './pages/AllProducts';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Profile from './pages/Profile';
import './App.css';

function App() {
  const [user, setUser] = useState()
  useEffect(() => {
      //let UserContext = createContext(user)
  },[user])

  return (
    <Router>
      {/* <UserContext.Provider> */}
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/products' component={AllProducts} />
          <Route exact path='/products/:productId' component={Product} />
          <Route exact path='/custom' component={Custom} />
          <Route exact path='/admin' component={Admin} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/profile' component={Profile} setUser={setUser}/>
        </Switch>
        <Footer />
      {/* </UserContext.Provider> */}
    </Router>


  );
}

export default App;
