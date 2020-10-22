import React from 'react';
import { AuthContext } from '../context/auth';

class Dashboard extends React.Component {
  render() {
    return (
      <div className="home">
        Welcome! <br />
        {this.context.user && this.context.user.email}
      </div>
    );
  }
}

Dashboard.contextType = AuthContext;

export default Dashboard;
