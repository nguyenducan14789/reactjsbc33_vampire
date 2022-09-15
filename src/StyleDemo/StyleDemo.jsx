import React, { Component } from 'react'
// khi import tất cả các component đều có thể sử dụng(cho dù có comment lại component có chứa css)(thường được sử dụng)
import '../asset/style.css' ;

import style from './StyleDemo.module.css';
export default class StyleDemo extends Component {
  render() {
    return (
      <div className='container'>
      <h1 className='color-red'>
        StyleDemo
      </h1>
      <h2 className={`text-center ${style['color-pink']}`}>vampire</h2>
      <p style={{
        color: 'green',
        backgroundColor: 'black',
        padding: '15px',
        border: '5px solid red',
      }}>loremsdadasdasdasdasdasdasd</p>
      </div>
    )
  }
}
