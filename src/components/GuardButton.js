import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { AuthContext } from '../context/auth';

//Este componente limita el acceso a ciertos componentes que solo son para usuarios que han iniciado sesión

export default class GuardButton extends Component {
  render() {
    const { isLoggedIn } = this.context;

    if (isLoggedIn) {
      return (
        <Link to="/new_product" className="btn btn-success rounded mr-2">
          Nuevo producto
        </Link>
      );
    } else {
      return (
        <Link to="/login" className="btn btn-success rounded">
          Inicial sesión
        </Link>
      );
    }

    // return <Redirect to="/" />;
  }
}

GuardButton.contextType = AuthContext;
