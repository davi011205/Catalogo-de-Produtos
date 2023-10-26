import './App.css'
import React, { useState } from 'react';
import produtos from '../src/dados/produtos.json';
import ListaProdutos from './componentes/ListaProdutos';
import CarrinhoDeCompra from './componentes/CarrinhoDeCompra';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="App">
      <ListaProdutos products={produtos} addToCart={handleAddToCart} />
      <CarrinhoDeCompra cartItems={cartItems} />
    </div>
  );
}

export default App;
