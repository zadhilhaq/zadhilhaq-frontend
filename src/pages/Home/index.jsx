import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './index.scss';

const Home = () => {
  const [products, setProduct] = useState([])

  useEffect(()=>{
    getProducts()
  }, [])
  const getProducts = async () =>{
    const response = await axios.get('http://localhost:5000/api/v3/product')
    setProduct(response.data)
  }

  const deleteData = (id) =>{
    axios.delete(`http://localhost:5000/api/v3/product/${id}`)
    console.log(id)
  }
  //
  return(
    <div>
      
    <div className="main">
      <Link to="/tambah" className="btn btn-primary">Tamah Produk</Link>
      <div className="search">
        <input type="text" placeholder="Masukan kata kunci..."/>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th className="text-right">Price</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          { products.map((product, index) => (
            <tr key= {product._id}>
            <td>{index + 1}</td>
            <td>{product.name}</td>
            <td className="text-right">{product.price}</td>
            <td className="text-center">
              <Link to={`/detail/${product._id}`} className="btn btn-sm btn-info">Detail</Link>
              <Link to={`/edit/${product._id}`} className="btn btn-sm btn-warning">Edit</Link>
              <button onClick={()=> deleteData(product._id)} className="btn btn-sm btn-danger">Delete</button>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default Home;