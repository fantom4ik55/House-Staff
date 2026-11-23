import React, { Component } from 'react'
// rce
export class Item extends Component {
  render() {
    return ( 
      <div className='item' id={this.props.item.id}>
          
            <img src={"./img/" + this.props.item.img} onClick={() => this.props.onShowRullItem(this.props.item)} alt=''/> 
            <div>
              <h2>{this.props.item.title}</h2>
              <p>{this.props.item.desc}</p>
            </div>
            <b>{this.props.item.price} $</b>
            <div className='add-to-card' onClick={() => this.props.onAdd(this.props.item)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  
                <circle cx="20" cy="20" r="20" fill="#ef4444" />
                
                <path d="M20 12 V28 M12 20 H28"
                      stroke="#ffffff"
                      stroke-width="2.5"
                      stroke-linecap="round" />
              </svg>
            </div>
      </div>
    )
  }
}

export default Item;
