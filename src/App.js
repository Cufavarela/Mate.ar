import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Contacto from './components/Body/contacto/contacto';
import Categories from './components/Body/categories/categories';
import Cart from './components/Body/carrito/Carrito';

import ProductList from './components/Body/producto/ProductList';
import DetallesDeProducto from './components/Body/producto/productDetailsContainer';
import {CartProvider} from './contexts/cartContext';


function App() {

  return (
    <BrowserRouter>
        <CartProvider>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/">
              <ProductList />
            </Route>
            <Route exact path="/categories/:id">
              <Categories />
            </Route>
            <Route exact path="/product/:id">
              <DetallesDeProducto />
            </Route>
            <Route path="/contacto">
              <Contacto />
            </Route>
            <Route path="/categories">
              <Categories />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
          </Switch>
          <Footer />
        </div>
        </CartProvider>
    </BrowserRouter>
  );
}

export default App;
