import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/items";
import Categories from "./components/Categories";
import ShowRullItem from "./components/ShowRullItem";
import Banner from "./components/BannerTop";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      currentCategory: 'all',   // ← добавили: какая категория активна
      items: [
        { id: 1, title: 'Стул серый',  img: 'chair-grey.jpeg',  desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.', category: 'chairs', price: '49.99' },
        { id: 2, title: 'Стол',        img: 'table.webp',       desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.', category: 'tables', price: '49.99' },
        { id: 3, title: 'Диван',       img: 'sofa.jpeg',        desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.', category: 'sofa',   price: '49.99' },
        { id: 4, title: 'Лампа',       img: 'wall-light.jpeg',  desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.', category: 'light',  price: '49.99' },
        { id: 5, title: 'Стул белый',  img: 'chair-white.jpeg', desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.', category: 'chairs', price: '49.99' },
      ],
       ShowRullItem:false,
       fullItem:{}
    };
   
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowRullItem = this.onShowRullItem.bind(this);
  }

  render() {
    return (
      <>
      <Header orders={this.state.orders} onDelete={this.deleteOrder} />
      <div className="wrapper">
        <Banner />
        <Categories
          chooseCategory={this.chooseCategory}
          currentCategory={this.state.currentCategory}   // ← передаём значение
        />
        <Items onShowRullItem={this.onShowRullItem} items={this.state.currentItems} onAdd={this.addToOrder} />
        {this.state.ShowRullItem && <ShowRullItem item={this.state.fullItem} onShowRullItem={this.onShowRullItem} onAdd={this.addToOrder}/>}
        <Footer />
      </div>
      </>
    );
  }
   onShowRullItem(item){
    this.setState({fullItem: item})
    this.setState({ShowRullItem: !this.state.ShowRullItem})
   }
  chooseCategory(category) {
    if (category === 'all') {
      this.setState({
        currentItems: this.state.items,
        currentCategory: 'all',          // ← запоминаем выбор
      });
      return;
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category),
      currentCategory: category,          // ← запоминаем выбор
    });
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) });
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach(el => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray) {
      this.setState({ orders: [...this.state.orders, item] }, () => {
        console.log(this.state.orders);
      });
    }
  }
}

export default App;