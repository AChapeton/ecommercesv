import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Home from './pages/Home';
import Layout from './components/Layout';
import Header from './components/Header';

function App() {
  return (
    <>
      <Layout>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </Router>
      </Layout>
    </>
  );
}

export default App;
