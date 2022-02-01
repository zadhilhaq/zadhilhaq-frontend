import { Link } from "react-router-dom";
import './index.scss';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from "react/cjs/react.development";

const Detail = (props) => {
  console.log(props.match.params.id)
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [stock, setStock] = useState('')
    const [_id, setId] = useState('')
    const history = useHistory()

    
    useEffect(()=>{
      const id= props.match.params.id
      axios.get(`http://localhost:5000/api/v3/product/${id}`)
      .then(res =>{
        console.log(res.data)
        setName(res.data.name)
        setPrice(res.data.price)
        setStock(res.data.stock)
        setId(res.data._id)
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
  return (
    <div className="main">
      <Link to="/" className="btn btn-primary">Kembali</Link>

      <table className="table">
        <tbody>
          <tr>
            <td>ID</td>
            <td>: {_id}</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>: {name}</td>
          </tr>
          <tr>
            <td>Price</td>
            <td>: {price}</td>
          </tr>
          <tr>
            <td>Stock</td>
            <td>: {stock}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Detail;