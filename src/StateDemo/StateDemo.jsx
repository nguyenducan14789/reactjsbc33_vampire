import React, { Component } from 'react'
import ChangeCarColor from './ChangeCarColor';

export default class StateDemo extends Component {

    state = {
        fSize : 30,
        color: 'purple',
        imgSrc: 'http://i.pravatar.cc?u=1'
    }


    randomAvatar = () => {
        let randomNumber = Math.random(Math.floor()*100);
        let newImgSrc = 'http://i.pravatar.cc?u='+ randomNumber;
        this.setState({
            imgSrc : newImgSrc
        })
    }




  render() {
    return (
      <div className='container' style={{marginBottom:500}}>
        <h2>Bài 1: tăng giảm phông chữ của đoạn văn bản</h2>
        <p style={{fontSize: this.state.fSize }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus odio quos dolorem consequatur. Doloribus explicabo, optio ipsum illum commodi distinctio dolores similique nam illo iste aperiam reiciendis officiis repellendus voluptatum!</p>
        <button className='mx-2 btn btn-dark' onClick={() => {
            this.setState({
                fSize : this.state.fSize + 1
            })
        }}>+</button>
        <button className='mx-2 btn btn-dark' onClick={() => {
            this.setState({
                fSize : this.state.fSize - 1
            })
        }}>-</button>

        <hr></hr>
        <h2>Bài 2: thay đổi màu sắc của div#home</h2>
        <div style={{color: this.state.color}} className='fa fa-home fa-10x'></div>
        <p>Chọn màu</p>
        <select id='color' className='form-control w-25 mt-2' onChange={(event) => {
            this.setState({
                // event.target = document.getElementById(color)
                color: event.target.value
            })
        }}>
            <option value={"red"}>red</option>
            <option value={"blue"}>blue</option>
            <option value={"green"}>green</option>
        </select>
        <hr></hr>
        <h2>Bài tập 3: App tinder</h2>
        <div className='card w-25'>
            <img src= {this.state.imgSrc} alt='...'></img>
            <div className='card-body'>
                <button className='btn btn-danger' onClick={() => {this.randomAvatar()}}>Random</button>
                <button>vampire</button>
            </div>
        </div>
        <hr></hr>
        <ChangeCarColor/>
        
      </div>
    )
  }
}
