import { useState } from 'react';
import Input from '../../components/Input';
import './index.scss';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Tambah = () => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [stock, setStock] = useState('')
  const history = useHistory()

  const saveProduct = async (e) => {
    e.preventDefault()
    await axios.post('http://localhost:5000/api/v3/product',{
      name: name,
      price: price,
      stock: stock
    })
    history.push('/')
    
  }

  return (
    <div className="main">
      <div className="card">
        <h2>Tambah Produk</h2>
        <br />
        <form onSubmit={saveProduct}>
          <Input className="form-control" name="name" type="text" placeholder="Nama Produk..." value={name} onChange={ (e) => setName(e.target.value)} label="Nama"/>
          <Input name="price" type="number" placeholder="Harga Produk..." value={price} onChange={(e) => setPrice(e.target.value)} label="Harga"/>
          <Input name="Stock" type="number" placeholder="Stock Produk..." value={stock} onChange={(e) => setStock(e.target.value)} label="Stock"/>
          <Input name="status" type="checkbox" label="Active" />
          <div><button className="btn btn-primary">Simpan</button></div>
          
        </form>
        {name} {price} {stock}
      </div>
    </div>
  )
}

export default Tambah;