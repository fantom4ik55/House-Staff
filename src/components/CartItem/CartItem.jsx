import React from "react";
import "./CartItem.css";

export default function CartItem({ item, onDelete, onIncrement, onDecrement }) {
  return (
    <div className="cart-item">
      <img
        className="cart-item__img"
        src={`/House-Staff/img/${item.img}`}
        alt={item.title}
      />

      <div className="cart-item__info">
        <h3 className="cart-item__title">{item.title}</h3>
        <span className="cart-item__price">
          {Number(item.price).toFixed(2)} $
        </span>

        <div className="cart-item__qty">
          <button
            onClick={() => onDecrement(item.id)}
            disabled={item.qty <= 1}
            aria-label="Уменьшить"
          >−</button>
          <span>{item.qty}</span>
          <button onClick={() => onIncrement(item.id)} aria-label="Увеличить">+</button>
        </div>
      </div>

      <span className="cart-item__total">
        {(Number(item.price) * item.qty).toFixed(2)} $
      </span>

      <button
        className="cart-item__remove"
        onClick={() => onDelete(item.id)}
        aria-label="Удалить"
      >
        <svg width="18" height="18" viewBox="0 0 448 512" fill="currentColor">
          <path d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z" />
        </svg>
      </button>
    </div>
  );
}