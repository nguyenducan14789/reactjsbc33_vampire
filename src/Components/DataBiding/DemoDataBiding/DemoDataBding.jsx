import React, { Component } from 'react'

export default class DemoDataBding extends Component {

    renderTitle = () => {
        return (
            <div className='bg-dark text-white text-center'>
                M0nesy
            </div>
        )
    }





    render() {
        const Ten = "vampire";
        const Product = {
            id: 1,
            name: "Niko",
            price: 1000
        }
        return (
            <div>
                <h3>Họ tên: {Ten}</h3>
                <div className='mt-2 w-25'>
                    <div className='card'>
                        <img src='http://picsum.photos/200'></img>
                        <div className='card-body'>
                            <p>{Product.name}</p>
                            <p>{Product.price}</p>
                        </div>
                    </div>
                </div>
                {this.renderTitle()}
            </div>
        )
    }
}
