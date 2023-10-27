import React, { useState, useEffect } from 'react';

function CarrinhoDeCompra({ cartItems }) {
  const total = cartItems.reduce((acc, item) => acc + item.preco, 0);

  return (
    <div className="shopping-cart">
      <h2>Meu Carrinho</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.id} - {item.nome} - ${item.preco}
          </li>
        ))}
      </ul>
      <p>Total: ${total}</p>
    </div>
  );
}

export default CarrinhoDeCompra;
