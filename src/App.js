import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Contacto from './components/Body/contacto/contacto';
import Cart from './components/Body/carrito/Carrito';
import ProductList from './components/Body/producto/ProductList';
import DetallesDeProducto from './components/Body/producto/productDetailsContainer';


function App() {
  const [items, setItems] = useState(0);

  const onAdd = (counter) => {
    setItems(items + counter);
  };

  return (
    <BrowserRouter>
        <div className="App">
          <Header items={items}/>
          <Switch>
            <Route exact path="/">
              <ProductList />
            </Route>
            <Route exact path="/product/:id">
              <DetallesDeProducto onAdd={onAdd} />
            </Route>
            <Route path="/contacto">
              <Contacto />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
          </Switch>
          <Footer />
        </div>
    </BrowserRouter>
  );
}

export default App;
