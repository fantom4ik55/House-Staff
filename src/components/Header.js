import React, { useState } from 'react'
import { FaShoppingBasket } from "react-icons/fa";
import Order from './Order';
import Close from './Close';

const showOrders = (props) =>{
  let summa = 0
  props.orders.forEach(el =>  summa += Number.parseFloat(el.price));
  return(
    <>
    {props.orders.map(el => (
        <Order onDelete={props.onDelete} key={el.id} item={el} />
      ))}
      <p className='summa'>Сумма: {new Intl.NumberFormat().format(summa) }$</p>
    </>
  )
}
 
export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false);
    const ordersLength = props.orders.length
   const hasItems = ordersLength > 0 ? showOrders(props) :  <span>Корзина пустая</span>
   const isItems = ordersLength > 0 ? 'badge' :  ''
  const countItems = ordersLength > 0 ? ordersLength :  0
  return (
    <header>
        <div className='shop-cart-wrapper'>
            <span className='logo'>House Staff</span>
            <div className='shop-cart-svg-wrapper'>
              <div className='shop-cart-svg'>
                <FaShoppingBasket 
                  onClick={() => setCartOpen(cartOpen = !cartOpen)} 
                  className={`shop-cart-btn ${cartOpen && 'active'} ${isItems}`}
                /> 
                {ordersLength > 0 && <span>{countItems}</span>}
              </div>
              <ul className='nav'>
                  <li>Про нас</li>
                  <li>Контакты</li>
                  <li>Кабинет</li>
              </ul>
            </div>
              {cartOpen && (
                <div className="shop-cart" >
                  <Close onClick={() => setCartOpen(cartOpen = !cartOpen)}/>
                  {hasItems}
                </div>
              )}
        </div>  
    </header>
  )
}
