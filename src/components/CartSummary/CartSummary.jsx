import React from "react";
import "./CartSummary.css";

const DELIVERY = 4.99;
const FREE_DELIVERY_FROM = 100;

export default function CartSummary({ totalPrice, totalCount, onClear }) {
  const delivery = totalPrice >= FREE_DELIVERY_FROM ? 0 : DELIVERY;
  const grandTotal = totalPrice + delivery;

  const handleClear = () => {
    if (window.confirm("Очистить корзину?")) onClear();
  };

  return (
    <aside className="cart-summary">
      <h2>Итого</h2>

      <div className="cart-summary__row">
        <span>Товары ({totalCount})</span>
        <span>{totalPrice.toFixed(2)} $</span>
      </div>

      <div className="cart-summary__row">
        <span>Доставка</span>
        <span>{delivery === 0 ? "Бесплатно" : `${delivery.toFixed(2)} $`}</span>
      </div>

      {delivery > 0 && (
        <div className="cart-summary__row cart-summary__row--discount">
          <span>До бесплатной доставки</span>
          <span>{(FREE_DELIVERY_FROM - totalPrice).toFixed(2)} $</span>
        </div>
      )}

      <div className="cart-summary__divider" />

      <div className="cart-summary__total">
        <span>К оплате</span>
        <span>{grandTotal.toFixed(2)} $</span>
      </div>

      <div className="cart-summary__promo">
        <input type="text" placeholder="Промокод" />
        <button>Применить</button>
      </div>

      <button className="cart-summary__checkout">
        Оформить заказ
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <button className="cart-summary__clear" onClick={handleClear}>
        Очистить корзину
      </button>
    </aside>
  );
}