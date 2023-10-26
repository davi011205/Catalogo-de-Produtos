import React, { useState, useEffect } from 'react';

function CarrinhoDeCompra({ cartItems }) {
  const total = cartItems.reduce((acc, item) => acc + item.preco, 0);

  function removeItem(item) {
    const index = cartItems.findIndex((cartItem) => cartItem.id === item.id);
  
    cartItems.splice(index, 1);
  
  }

  return (
    <div className="shopping-cart">
      <h2>Meu Carrinho</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.id} - {item.nome} - ${item.preco}
            <button className="btn-remove"onClick={() => removeItem(item)}>
              <svg width="20" height="20" fill="red" viewBox="0 0 24 24">
                <path d="M19,6.41L17.59,5 12,10.59 6.41,5 5,6.41 10.59,12 5,17.59 6.41,19 12,13.41 17.59,19 19,17.59 13.41,12z" />
              </svg>
            </button>
          </li>
        ))}
      </ul>
      <p>Total: ${total}</p>
    </div>
  );
}

export default CarrinhoDeCompra;
