import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/items";
import Categories from "./components/Categories";
import ShowRullItem from "./components/ShowRullItem";
import Banner from "./components/BannerTop";
import Cart from "./pages/Cart/Cart";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      currentCategory: "all",
      items: [
        { id: 1, title: "Стул серый",  img: "chair-grey.jpeg",  desc: "Lorem ipsum...", category: "chairs", price: 49.99 },
        { id: 2, title: "Стол",        img: "table.webp",       desc: "Lorem ipsum...", category: "tables", price: 49.99 },
        { id: 3, title: "Диван",       img: "sofa.jpeg",        desc: "Lorem ipsum...", category: "sofa",   price: 49.99 },
        { id: 4, title: "Лампа",       img: "wall-light.jpeg",  desc: "Lorem ipsum...", category: "light",  price: 49.99 },
        { id: 5, title: "Стул белый",  img: "chair-white.jpeg", desc: "Lorem ipsum...", category: "chairs", price: 49.99 },
      ],
      ShowRullItem: false,
      fullItem: {},
    };

    this.state.currentItems = this.state.items;

    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowRullItem = this.onShowRullItem.bind(this);
    this.incrementQty = this.incrementQty.bind(this);
    this.decrementQty = this.decrementQty.bind(this);
    this.clearCart = this.clearCart.bind(this);
  }

  addToOrder(item) {
    this.setState((prev) => {
      const existing = prev.orders.find((el) => el.id === item.id);
      if (existing) {
        return {
          orders: prev.orders.map((el) =>
            el.id === item.id ? { ...el, qty: el.qty + 1 } : el
          ),
        };
      }
      return { orders: [...prev.orders, { ...item, qty: 1 }] };
    });
  }

  deleteOrder(id) {
    this.setState((prev) => ({ orders: prev.orders.filter((el) => el.id !== id) }));
  }

  incrementQty(id) {
    this.setState((prev) => ({
      orders: prev.orders.map((el) =>
        el.id === id ? { ...el, qty: el.qty + 1 } : el
      ),
    }));
  }

  decrementQty(id) {
    this.setState((prev) => ({
      orders: prev.orders.map((el) =>
        el.id === id && el.qty > 1 ? { ...el, qty: el.qty - 1 } : el
      ),
    }));
  }

  clearCart() {
    this.setState({ orders: [] });
  }

  chooseCategory(category) {
    if (category === "all") {
      this.setState({ currentItems: this.state.items, currentCategory: "all" });
      return;
    }
    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
      currentCategory: category,
    });
  }

  onShowRullItem(item) {
    this.setState({ fullItem: item });
    this.setState({ ShowRullItem: !this.state.ShowRullItem });
  }

  render() {
    const totalCount = this.state.orders.reduce((s, i) => s + i.qty, 0);
    const totalPrice = this.state.orders.reduce((s, i) => s + Number(i.price) * i.qty, 0);

    const cartProps = {
      orders: this.state.orders,
      totalCount,
      totalPrice,
      onDelete: this.deleteOrder,
      onIncrement: this.incrementQty,
      onDecrement: this.decrementQty,
      onClear: this.clearCart,
    };

    return (
      <>
        <Header {...cartProps} />
        <Routes>
          <Route
            path="/"
            element={
              <div className="wrapper">
                <Banner />
                <Categories
                  chooseCategory={this.chooseCategory}
                  currentCategory={this.state.currentCategory}
                />
                <Items
                  onShowRullItem={this.onShowRullItem}
                  items={this.state.currentItems}
                  onAdd={this.addToOrder}
                />
                {this.state.ShowRullItem && (
                  <ShowRullItem
                    item={this.state.fullItem}
                    onShowRullItem={this.onShowRullItem}
                    onAdd={this.addToOrder}
                  />
                )}
                <Footer />
              </div>
            }
          />
          <Route path="/cart" element={<Cart {...cartProps} />} />
        </Routes>
      </>
    );
  }
}

export default App;