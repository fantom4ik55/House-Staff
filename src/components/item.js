import React, { Component } from 'react';
import Image from './Image';

export class Item extends Component {
  render() {
    const { item } = this.props;

    return (
      <div className="item" id={item.id}>
        <Image
          src={item.img ? `/img/${item.img}` : null}
          alt={item.title}
          onClick={() => this.props.onShowRullItem(item)}
          title={item.title}
        />

        <div>
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
        </div>

        <b>{item.price} $</b>

        <div className="add-to-card" onClick={() => this.props.onAdd(item)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="20" fill="#ef4444" />
            <path
              d="M20 12 V28 M12 20 H28"
              stroke="#ffffff"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    );
  }
}

export default Item;