import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../context/auth';

//Este componente limita el acceso a ciertos componentes que solo son para usuarios que han iniciado sesión

export default class Root extends Component {
  render() {
    const { children } = this.props;

    const { AuthReady } = this.context;

    if (AuthReady) {
      if (!AuthReady) {
        return <div>Loading...</div>;
      }
    }

    return children;
  }
}

Root.contextType = AuthContext;
