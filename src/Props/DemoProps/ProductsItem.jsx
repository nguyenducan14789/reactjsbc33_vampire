import React, { Component } from 'react'

export default class ProductsItem extends Component {

    // this.props: thuộc tính props là thuộc tính có sẵn của react class components, dùng để nhận giá trị từ component cha( nơi sử dụng thẻ này) truyền vào


    render() {
        // const name = this.props.ProductName;
        // const img = this.props.img;
        const {name,img,price,id} = this.props.product;
        return (
            <div className='card'>
                <img src={img}></img>
                <div className='card-body'>
                    <p>{name}</p>
                    <p>{price}</p>
                    <p>{id}</p>
                    <button className='btn btn-dark'>Add to card</button>
                </div>
            </div>
        )
    }
}
