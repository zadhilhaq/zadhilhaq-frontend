import Input from "../../components/Input";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from "react/cjs/react.development";

const Edit = (props) => {
  console.log(props.match.params.id)
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [stock, setStock] = useState('')
    const history = useHistory()

    
    useEffect(()=>{
      const id= props.match.params.id
      axios.get(`http://localhost:5000/api/v3/product/${id}`)
      .then(res =>{
        console.log(res.data)
        setName(res.data.name)
        setPrice(res.data.price)
        setStock(res.data.stock)
      }
        
      )
    }, [])

    const changeProduct = async (e) => {
      e.preventDefault()
      const id= props.match.params.id
      axios.put(`http://localhost:5000/api/v3/product/${id}`,{
        name: name,
        price: price,
        stock: stock
      })
      history.push('/')
      
    }

    // const getProductById = async () => {
      
      // setName(response.product.name)
      // setPrice(response.product.price)
      // setStock(response.product.stock)
      
      // console.log(id)
    // }
  return (
    <div className="main">
      <div className="card">
        <h2>Edit Produk</h2>
        <br />
        <form onSubmit={changeProduct}>
          <Input name="name" type="text" placeholder="Nama Produk..." value={name} onChange={ (e) => setName(e.target.value)} label="Nama" />
          <Input name="price" type="number" placeholder="Harga Produk..." value={price} onChange={ (e) => setPrice(e.target.value)} label="Harga" />
          <Input name="Stock" type="number" placeholder="Stock Produk..." value={stock} onChange={ (e) => setStock(e.target.value)} label="Stock" />
          <Input name="status" type="checkbox" label="Active" />
          <button type="submit" className="btn btn-primary">Simpan</button>
        </form>
      </div>
    </div>
  )
}

export default Edit;