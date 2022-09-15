import React, { Component } from 'react'


const ArrProduct = [
    { id: 1, name: "red car", img: './img/product/red-car.jpg', price: 1000 },
    { id: 1, name: "black car", img: './img/product/black-car.jpg', price: 2000 },
    { id: 1, name: "silver car", img: './img/product/silver-car.jpg', price: 3000 },
    { id: 1, name: "steel car", img: './img/product/steel-car.jpg', price: 4000 }
]

export default class RenDerArray extends Component {

    renderProduct = () => {
        // cach 1
        // let arrTr = []
        // for(let prod of ArrProduct){
        //     let trx = <tr key={prod.id}>
        //         <td>{prod.id}</td>
        //         <td>{prod.name}</td>
        //         <td><img src={prod.img} alt='...' width={50} height={50}></img></td>
        //         <td>{prod.price}</td>
        //         <td>
        //             <button className='btn btn-danger'>del</button>
        //         </td>
        //     </tr>
        //     arrTr.push(trx)
        // }    
        // return arrTr

        let arrTr = ArrProduct.map((item) => {
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td><img src={item.img} alt='...' width={50} height={50}></img></td>
                    <td>{item.price}</td>
                    <td>
                        <button className='btn btn-danger'>del</button>
                    </td>
                </tr>
            )
        })
        return arrTr
    }

    renderCardProduct = () => {
        return ArrProduct.map((item) => {
            return <div className='col-3' key={item.id}>
                <div className='card'>
                    <img src={item.img}></img>
                    <div className='card-body'>
                        <h3>{item.name}</h3>
                        <h3>{item.price}</h3>
                        <button className='btn btn-success mr-3' style={{marginRight:30}}>Add</button>
                        <button className='btn btn-danger'>Dell</button>
                    </div>
                </div>
            </div>
        })
    }

    render() {
        return (
            <div className='container'>
                <h1 className='text-center mt-5'>Render Product Cars</h1>
                <h2 className='text-center'>Product List</h2>
                <table className='table'>
                    <thead>
                        <th>id</th>
                        <th>name</th>
                        <th>img</th>
                        <th>price</th>
                        <th></th>
                    </thead>
                    <tbody>
                        {this.renderProduct()}
                    </tbody>
                </table>
                <hr />
                <h2 className='text-center'>danh sách sản phẩm</h2>
                <div className='row'>
                    {this.renderCardProduct()}
                </div>
            </div>
        )
    }
}
