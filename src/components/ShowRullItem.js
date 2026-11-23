import React, { Component } from 'react'
import Close from './Close'

export class ShowRullItem extends Component {
  render() {
    return (
      <div className='full-item'>
          <div>
              <Close onClick={() => this.props.onShowRullItem()}/>
              <img src={"./img/" + this.props.item.img} onClick={() => this.props.onShowRullItem(this.props.item)}/> 
              <div>
                <h2>{this.props.item.title}</h2>
                <p>{this.props.item.desc}</p>
              </div>
              <b>{this.props.item.price} $</b>
              <div className='add-to-card' onClick={() => this.props.onAdd(this.props.item)}>+</div>
          </div>
      </div>
    )
  }
}

export default ShowRullItem
