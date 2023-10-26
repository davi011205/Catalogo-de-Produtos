import React, { useState } from 'react';
import produtos from '../dados/produtos.json';
import DetalhesProduto from './DetalhesProduto';


function ListaProdutos({ products, addToCart }) {
  const [hoverProduto, setHoverProduto] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryFilterChange = (category) => {
    setSelectedCategory(category);
  };
  

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };
  
  const handleMouseEnter = (product) => {
    setHoverProduto(product);
  };

  const handleMouseLeave = () => {
    setHoverProduto(null);
  };

  const filteredProducts = selectedCategory
  ? produtos.filter((produto) => produto.categoria === selectedCategory)
  : produtos;

  return (
    <>
    <div className="product-list">
    <h1 className="centered">Minha Loja de Produtos</h1>
      <div className="filter-buttons centered">
        <button onClick={() => handleCategoryFilterChange(null)}>Todos</button>
        <button onClick={() => handleCategoryFilterChange('credito')}>Crédito</button>
        <button onClick={() => handleCategoryFilterChange('debito')}>Débito</button>
        <button onClick={() => handleCategoryFilterChange('credito/debito')}>Crédito/Débito</button>
      </div>
      {filteredProducts.map((product) => (
        <div key={product.id}
          className={`product-card ${hoverProduto === product ? 'hovered' : ''}`}
          onMouseEnter={() => handleMouseEnter(product)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleProductClick(product)}
        >
          <img src={product.imagem} alt={product.nome} />
          <h3>{product.nome}</h3>
          <p>{product.avaliacao}</p>
          <button onClick={() => addToCart(product)}>Adicionar ao carrinho</button>
          {hoverProduto === product && (
            <div className="hover-content">{product.hover}</div>
          )}
        </div>
      ))}
       {selectedProduct && <DetalhesProduto product={selectedProduct} />}
    </div>
    </>
  );
}

export default ListaProdutos;





