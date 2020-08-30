import React, { useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';


function App() {
  const [items, setItems] = useState(0);

  const onAdd = (counter) => {
    setItems(items + counter);
  };

  return (
    <div className="App">
      <Header items={items}/>
      <Body onAdd={onAdd} />
      <Footer />
    </div>
  );
}

export default App;
