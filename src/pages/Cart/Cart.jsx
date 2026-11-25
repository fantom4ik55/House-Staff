import React from "react";
import { Link } from "react-router-dom";
import CartItem from "../../components/CartItem/CartItem";
import CartSummary from "../../components/CartSummary/CartSummary";
import "./Cart.css";

export default function Cart({
  orders,
  totalCount,
  totalPrice,
  onDelete,
  onIncrement,
  onDecrement,
  onClear,
}) {
  return (
    <div className="cart-page wrapper">
      <h1>Корзина</h1>
      <p className="cart-subtitle">
        {totalCount > 0
          ? `${totalCount} товар${plural(totalCount)} в вашей корзине`
          : "Пока пусто"}
      </p>

      {orders.length === 0 ? (
        <div className="cart-empty">
          <svg width="80" height="80" viewBox="0 0 576 512" fill="currentColor">
            <path d="M576 216v16c0 13.255-10.745 24-24 24h-8l-26.113 182.788C514.509 462.435 494.257 480 470.37 480H105.63c-23.887 0-44.139-17.565-47.518-41.212L32 256h-8c-13.255 0-24-10.745-24-24v-16c0-13.255 10.745-24 24-24h67.341l106.78-146.821c10.395-14.292 30.407-17.453 44.701-7.058 14.293 10.395 17.453 30.408 7.058 44.701L170.477 192h235.046L326.12 82.821c-10.395-14.292-7.234-34.306 7.059-44.701 14.291-10.395 34.306-7.235 44.701 7.058L484.659 192H552c13.255 0 24 10.745 24 24z" />
          </svg>
          <h2>Корзина пуста</h2>
          <p>Добавьте товары из каталога — и они появятся здесь.</p>
          <Link to="/" className="btn-back">Перейти в каталог</Link>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items-list">
            {orders.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onDelete={onDelete}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
              />
            ))}
          </div>
          <CartSummary
            totalPrice={totalPrice}
            totalCount={totalCount}
            onClear={onClear}
          />
        </div>
      )}
    </div>
  );
}

function plural(n) {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return "";
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return "а";
  return "ов";
}