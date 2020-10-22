import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../context/auth';

//Este componente limita el acceso a ciertos componentes que solo son para usuarios que han iniciado sesión

export default class GuardRoute extends Component {
  render() {
    const { type, ...rest } = this.props;

    const { isLoggedIn, AuthReady } = this.context;

    if (AuthReady) {
      if (type === 'private' && !isLoggedIn) {
        return <Redirect to="/login" />;
      } else if (type === 'public' && isLoggedIn) {
        return <Redirect to="/dashboard" />;
      }
    }

    return <Route {...rest} />;
  }
}

GuardRoute.contextType = AuthContext;
