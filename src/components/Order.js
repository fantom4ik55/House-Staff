import React, { Component } from 'react'
import { FaTrash } from 'react-icons/fa'

export class Order extends Component {
  render() {
    const base = process.env.PUBLIC_URL || ''  
    const img = this.props.item.img
      ? `${base}/img/${this.props.item.img}`
      : `${base}/img/no_foto.jpg`
    return (
      <div className='item'>
            <img src={img} alt="фото"/> 
            <div className='item-title-price'>
                <h2>{this.props.item.title}</h2> 
                <b>{this.props.item.price} $</b>
            </div>
            <FaTrash className='delete-iclon' onClick={() => this.props.onDelete(this.props.item.id)}/>
      </div>
    )
  }
}

export default Order
