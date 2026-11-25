import React, { createContext, useContext, useReducer, useEffect } from "react";

const CartContext = createContext();

const initialState = { items: [] };

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const existing = state.items.find((i) => i.id === action.payload.id);
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.id === action.payload.id ? { ...i, qty: i.qty + 1 } : i
          ),
        };
      }
      return { ...state, items: [...state.items, { ...action.payload, qty: 1 }] };
    }
    case "REMOVE_ITEM":
      return { ...state, items: state.items.filter((i) => i.id !== action.payload) };
    case "INCREMENT":
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.payload ? { ...i, qty: i.qty + 1 } : i
        ),
      };
    case "DECREMENT":
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.payload && i.qty > 1 ? { ...i, qty: i.qty - 1 } : i
        ),
      };
    case "CLEAR":
      return { ...state, items: [] };
    case "LOAD":
      return { ...state, items: action.payload };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    const saved = localStorage.getItem("house-staff-cart");
    if (saved) dispatch({ type: "LOAD", payload: JSON.parse(saved) });
  }, []);

  useEffect(() => {
    localStorage.setItem("house-staff-cart", JSON.stringify(state.items));
  }, [state.items]);

  const totalCount = state.items.reduce((s, i) => s + i.qty, 0);
  const totalPrice = state.items.reduce((s, i) => s + Number(i.price) * i.qty, 0);

  return (
    <CartContext.Provider value={{ ...state, dispatch, totalCount, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);