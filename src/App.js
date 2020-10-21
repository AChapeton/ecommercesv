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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Layout>
        <Router>
          <Header />
          <AuthContextProvider>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/new_product" component={NewProducts} />
              <Redirect from="/" to="/dashboard" />
            </Switch>
          </AuthContextProvider>
        </Router>
      </Layout>
      <ToastContainer />
    </>
  );
}

export default App;
