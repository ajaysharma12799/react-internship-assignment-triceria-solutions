import React, {useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Cart from './pages/Cart';
import Header from './components/Header';
import { CartContext } from './context/CartContext';
import "./App.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [cartItem, setCartItem] = useState([]);
  return (
    <React.Fragment>
      <ToastContainer />
      <Router>
        <CartContext.Provider value={{cartItem, setCartItem}}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Cart" component={Cart} />
        </Switch>
        </CartContext.Provider>
      </Router>
    </React.Fragment>
  )
}

export default App
