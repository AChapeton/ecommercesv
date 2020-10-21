/* Context permite tener un estado global para todos los componentes, como una única fuente de datos. */

import React from 'react';
import { watchUserChanges } from '../services/firebase';

//Inicializa el sercicio de Context
export const AuthContext = React.createContext();

export class AuthContextProvider extends React.Component {
  state = {
    /* Firebase tarda un poco en reconocer la primera conexión de un usuario, esta propiedad ayuda a dejar indicado cuando ya está creada la conexión*/
    authReady: false,
    isLoggedIn: false,
    user: null,
  };

  componentDidMount() {
    watchUserChanges((user) => {
      if (user) {
        this.setState({
          authReady: true,
          isLoggedIn: true,
          user,
        });
      } else {
        this.setState({
          authReady: true,
          isLoggedIn: false,
          user: null,
        });
      }
    });
  }

  render() {
    return (
      <AuthContext.Provider value={this.state}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthContextProvider;
