import React, { Component } from 'react'
import Contebt from './Contebt'
import Footer from './Footer'
import Header from './Header'
import Nav from './Nav'

export default class Home
 extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className='d-flex'>
            <div className='w-25'>
            <Nav/>
            </div>
            <div className='w-75'>
            <Contebt/>
            </div>
        </div> 
        
        <Footer/>
      </div>
    )
  }
}
