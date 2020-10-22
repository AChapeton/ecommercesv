import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Layout from './components/Layout';
import Header from './components/Header';
import NewProducts from './components/NewProducts';
//Permite a todos los componentes accesar al state global
import { AuthContextProvider } from './context/auth';
import GuardRoute from './components/GuardRoute';
import Root from './components/Root';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <AuthContextProvider>
        <Layout>
          <Router>
            <Header />
            <Root>
              <Switch>
                {/* <GuardRoute type="public" exact path="/" component={Home} /> */}
                <GuardRoute
                  type="private"
                  exact
                  path="/dashboard"
                  component={Dashboard}
                />
                <GuardRoute
                  type="public"
                  exact
                  path="/login"
                  component={Login}
                />
                <GuardRoute
                  type="private"
                  exact
                  path="/new_product"
                  component={NewProducts}
                />
                <Redirect from="/" to="/dashboard" />
              </Switch>
            </Root>
          </Router>
        </Layout>
      </AuthContextProvider>
      <ToastContainer />
    </>
  );
}

export default App;
