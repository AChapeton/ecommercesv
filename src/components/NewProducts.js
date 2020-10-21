import React, { useEffect, useState } from 'react';
import ProductForm from './ProductForm';
import { db } from '../services/firebase';
import { toast } from 'react-toastify';

const Products = () => {
  useEffect(() => {
    getProducts();
  }, []);

  const [products, SetProducts] = useState([]);
  const [currentId, setCurrentId] = useState('');

  const getProducts = () => {
    db.collection('products').onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      SetProducts(docs);
    });
  };

  const newProduct = async (productObject) => {
    try {
      if (currentId === '') {
        db.collection('products')
          .doc()
          .set(productObject);
        toast('Producto agregado', {
          type: 'success',
        });
      } else {
        await db
          .collection('products')
          .doc(currentId)
          .update(productObject);
        toast('Producto actualizado', {
          type: 'info',
        });
        setCurrentId('');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteProduct = async (id) => {
    if (window.confirm('¿Estás seguro de eliminar este producto?')) {
      await db
        .collection('products')
        .doc(id)
        .delete();
      toast('Producto eliminado', {
        type: 'error',
      });
    }
  };

  return (
    <div className="produtcs">
      <div className="container p-4">
        <div className="row">
          <ProductForm {...{ newProduct, currentId, products }} />
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Precio</th>
                <th scope="col">Categoría</th>
                <th scope="col">Descripción</th>
              </tr>
            </thead>
            <tbody>
              {products.map((prod) => (
                <tr key={prod.id}>
                  <td>{prod.name}</td>
                  <td>{prod.price}</td>
                  <td>{prod.category}</td>
                  <td>{prod.description}</td>
                  <td>
                    <button
                      className="btn btn-primary rounded"
                      onClick={() => setCurrentId(prod.id)}
                    >
                      <i className="material-icons">create</i>
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger rounded"
                      onClick={() => deleteProduct(prod.id)}
                    >
                      <i className="material-icons">close</i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="col-md-8"></div>
        </div>
      </div>
    </div>
  );
};

export default Products;
