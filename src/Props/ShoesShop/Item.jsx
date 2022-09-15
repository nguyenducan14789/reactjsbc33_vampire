import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    const {name, id, alias, price, quantity, image} = this.props.product;
    return (
      <div className='card'>
        <img src={image}></img>
        <div className='card-body d-flex justify-content-between'>
            <p>{name}</p>
            <p>{price}</p>
        </div>
        <div className='card-body d-flex justify-content-between'>
            <p>{quantity}</p>
            <p>{alias}</p>
        </div>
      </div>
    )
  }
}
