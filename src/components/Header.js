import React, { useState } from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { Link } from "react-router-dom";
import Order from "./Order";
import Close from "./Close";

const showOrders = (props) => {
  let summa = 0;
  props.orders.forEach((el) => (summa += Number.parseFloat(el.price) * (el.qty || 1)));
  return (
    <>
      {props.orders.map((el) => (
        <Order onDelete={props.onDelete} key={el.id} item={el} />
      ))}
      <p className="summa">
        Сумма: {new Intl.NumberFormat().format(summa)}$
      </p>
    </>
  );
};

export default function Header(props) {
  const [cartOpen, setCartOpen] = useState(false);
  const ordersLength = props.orders.length;
  const hasItems =
    ordersLength > 0 ? showOrders(props) : <span>Корзина пустая</span>;
  const isItems = ordersLength > 0 ? "badge" : "";
  const countItems = ordersLength > 0 ? ordersLength : 0;
const base = process.env.PUBLIC_URL || '' 
 
  return (
    <header>
      <div className="shop-cart-wrapper">
        <a href={base} className="logo">House Staff</a>
        <div className="shop-cart-svg-wrapper">
          <div className="shop-cart-svg">
            <FaShoppingBasket
              onClick={() => setCartOpen(!cartOpen)}
              className={`shop-cart-btn ${cartOpen ? "active" : ""} ${isItems}`}
            />
            {ordersLength > 0 && <span>{countItems}</span>}
          </div>
          <ul className="nav">
            <li>Про нас</li>
            <li>Контакты</li>
            <li>Кабинет</li>
          </ul>
        </div>

        {cartOpen && (
          <div className="shop-cart">
            <Close onClick={() => setCartOpen(false)} />
            {hasItems}

            {ordersLength > 0 && (
              <Link
                to="/cart"
                className="shop-cart__go-to-cart"
                onClick={() => setCartOpen(false)}
              >
                Перейти в корзину →
              </Link>
            )}
          </div>
        )}
      </div>
    </header>
  );
}