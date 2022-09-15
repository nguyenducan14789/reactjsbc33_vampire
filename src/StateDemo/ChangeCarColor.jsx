import React, { Component } from 'react'

export default class ChangeCarColor extends Component {

    state = {
        imgSrcCar : './img/product/red-car.jpg'
    }

    ChangeCar = (color) => {
        this.setState({
            imgSrcCar :`./img/product/${color}-car.jpg`
        })
    }


  render() {
    return (
      <div>
        <div className='row'>
            <div className='col-4'>
                <img src={this.state.imgSrcCar} className='w-100' alt='...'></img>
            </div>
        </div>
        <div className='col-8 mt-10'>
            <button className='btn btn-danger mx-2' onClick={() => {
                this.ChangeCar("red")
            }}>red car</button>
            <button className='btn btn-danger mx-2' onClick={() => {
                this.ChangeCar("black")
            }}>black car</button>
            <button className='btn btn-danger mx-2' onClick={() => {
                this.ChangeCar("silver")
            }}>silver car</button>
            <button className='btn btn-danger mx-2' onClick={() => {
                this.ChangeCar("steel")
            }}>steel car</button>
        </div>
      </div>
    )
  }
}
