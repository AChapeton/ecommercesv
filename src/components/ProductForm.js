import React, { useState } from 'react';


const ProductForm = (props) => {
  const initialStateValues = {
    name: '',
    price: '',
    category: '',
    description: '',
  };

  const [product, setProduct] = useState(initialStateValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
    props.newProduct(product);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  return (
    <form className="card card-body" onSubmit={handleSubmit}>
      <h2>Nuevo producto</h2>
      <div className="form-group input-group">
        <input
          placeholder="Nombre del producto"
          type="text"
          className="form-control"
          name="name"
          onChange={handleInputChange}
          value={product.name}
        />
      </div>
      <div className="form-group input-group">
        <input
          placeholder="Precio"
          type="text"
          className="form-control"
          name="price"
          onChange={handleInputChange}
          value={product.price}
        />
      </div>
      <div className="form-group input-group">
        <input
          placeholder="Categoría"
          type="text"
          className="form-control"
          name="category"
          onChange={handleInputChange}
          value={product.category}
        />
      </div>
      <div className="form-group input-group">
        <textarea
          placeholder="Descripción"
          rows="3"
          className="form-control"
          name="description"
          onChange={handleInputChange}
          value={product.description}
        />
      </div>
      <button className="btn btn-primary btn-block rounded">Guardar</button>
    </form>
  );
};

export default ProductForm;
