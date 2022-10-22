import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import {Product} from "../../models/Product";
import Wrapper from "../../components/Wrapper";

const Products = () => {

  const [products, setProducts] = React.useState([]);

  useEffect(() => {
    (
      async () => {
        const {data} = await axios.get('/products');
        setProducts(data.data);
      }
    )();
  }, [])

  const deleteProduct = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      await axios.delete(`/products/${id}`);
      setProducts(products.filter((p: Product) => p.id !== id));
    }
  }

  return (
    <Wrapper>
      <div className="pt-3 pb-2 mb-3 border-bottom">
        <Link to='/products/create' className='btn btn-sm btn-outline-secondary'>Add Product</Link>
      </div>
      <div className="table-responsive pt-5">
        <table className="table table-striped table-sm">
          <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
          </thead>
          <tbody>
          {products.map((p: Product) => {
            return (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td><img src={p.image} alt={p.description} width='50'/></td>
                <td>{p.title}</td>
                <td>{p.description}</td>
                <td>{p.price}</td>
                <td>
                  <div className="btn-group mr-2">
                    <Link to={`/products/edit/${p.id}`} className="btn btn-sm btn-outline-secondary">Edit</Link>
                  </div>
                  <div className="btn-group mr-2">
                    <a href="#" className="btn btn-sm btn-outline-secondary" onClick={() => deleteProduct(p.id)}>Delete</a>
                  </div>
                </td>
              </tr>
            )
          })}
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
};

export default Products;
