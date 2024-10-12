import './App.css';
import React, { useState } from 'react';
import produtos from '../src/dados/produtos.json';
import ListaProdutos from './componentes/ListaProdutos';
import CarrinhoDeCompra from './componentes/CarrinhoDeCompra';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryFilterChange = (category) => {
    setSelectedCategory(category);
  };

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const filteredProducts = selectedCategory
    ? produtos.filter((produto) => produto.categoria === selectedCategory)
    : produtos;

  return (
    <div className="App">
      <h1>Minha Loja de Produtos</h1>
      <div className="filter-buttons">
        <button onClick={() => handleCategoryFilterChange(null)}>Todos</button>
        <button onClick={() => handleCategoryFilterChange('credito')}>Crédito</button>
        <button onClick={() => handleCategoryFilterChange('debito')}>Débito</button>
        <button onClick={() => handleCategoryFilterChange('credito/debito')}>Crédito/Débito</button>
      </div>
      <ListaProdutos products={filteredProducts} onAddToCart={handleAddToCart} />
      <CarrinhoDeCompra cartItems={cartItems} />
    </div>
  );
}

export default App;
