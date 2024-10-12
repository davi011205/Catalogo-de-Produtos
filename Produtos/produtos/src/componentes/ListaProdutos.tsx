import React, { useState } from 'react';
import DetalhesProduto from './DetalhesProduto';

function ListaProdutos({ products, onAddToCart }) {
  const [hoverProduto, setHoverProduto] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleMouseEnter = (product) => {
    setHoverProduto(product);
  };

  const handleMouseLeave = () => {
    setHoverProduto(null);
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <div
          key={product.id}
          className={`product-card ${hoverProduto === product ? 'hovered' : ''}`}
          onMouseEnter={() => handleMouseEnter(product)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleProductClick(product)}
        >
          <img src={product.imagem} alt={product.nome} />
          <h3>{product.nome}</h3>
          <p>{product.avaliacao}</p>
          {hoverProduto === product && (
            <div className="hover-content">{product.hover}</div>
          )}
          <button onClick={() => onAddToCart(product)}>Adicionar ao Carrinho</button>
        </div>
      ))}
      {selectedProduct && <DetalhesProduto product={selectedProduct} />}
    </div>
  );
}

export default ListaProdutos;
