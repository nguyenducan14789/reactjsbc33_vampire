import React, { Component } from 'react'
import ProductsItem from './ProductsItem'

const ArrProduct = [
    { id: 1, name: "red car", img: './img/product/red-car.jpg', price: 1000 },
    { id: 1, name: "black car", img: './img/product/black-car.jpg', price: 2000 },
    { id: 1, name: "silver car", img: './img/product/silver-car.jpg', price: 3000 },
    { id: 1, name: "steel car", img: './img/product/steel-car.jpg', price: 4000 }
];










export default class ProductList extends Component {
    renderProduct = () => {
        return ArrProduct.map((item,index) => {
            return <div className='col-3' key={index}>
                <ProductsItem product = {item}/> 
            </div>
        }) 
    }
    render() {

    // let prod = {
    //     id: 1,
    //     ProductName: "Red car",
    //     price: 1000,
    //     img: './img/product/red-car.jpg'
    // }    


        return (
            <div className='container'>
                {/* <div className='w-25 mt-2'>
                    <ProductsItem Product = {ArrProduct[2]}/>
                </div> */}
                {/* <div className='w-25 mt-2'>
                    <ProductsItem ProductName = "black car" img = "./img/product/black-car.jpg"/>
                </div> */}

                <h2>ProductList</h2>
                <div className='row'>
                    {this.renderProduct()}
                </div>

            </div>
        )
    }
}
