import React from 'react';
import { startUI } from '../services/firebase';

// const Login = () => {
//   useEffect({
//     startUi('#firebaseui');
//   }, [])

//   return (
//     <>
//       <div id="firebaseui"></div>
//     </>
//   );
// };

class Login extends React.Component {
  componentDidMount() {
    startUI('#firebaseui');
  }

  render() {
    return <div id="firebaseui"></div>;
  }
}

export default Login;
