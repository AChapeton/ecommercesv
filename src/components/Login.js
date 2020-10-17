import firebase from 'firebase';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePass = (e) => {
    setPass(e.target.value);
  };

  const SignInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        const token = res.credential.accessToken;
        const user = res.user;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container shadow-sm py-3 my-5 bg-white rounded">
        <div className="row justify-content-center ">
          <div className="col-12 col-sm-6 col-md-3">
            <form>
              <h2>Login</h2>
              <div className="form-group d-block">
                <label>Correo</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleEmail}
                />
              </div>
              <div className="form-group d-block">
                <label>Contraseña</label>
                <input
                  type="pass"
                  className="form-control"
                  id="pass"
                  name="pass"
                  value={email}
                  onChange={handleEmail}
                />
              </div>
              <button className="btn btn-primary rounded">Submit</button>
              <br />
              <span>--- or ---</span>
              <br />
              <button
                className="btn btn-primary rounded"
                onChange={SignInWithGoogle}
              >
                Gmail
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
