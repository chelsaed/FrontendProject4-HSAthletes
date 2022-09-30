import { Link } from 'react-router-dom';
import './LoginPage.css';
import React, { useState } from 'react';
import userToken from '../../src/utils/userService';

//create function component

const LoginPage = (props) => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit =  (e) => {
    e.preventDefault();
    try {
      userToken.login(state);
      props.handleSignupOrLogin();
      props.history.push('/');
    } catch (err) {
      alert('Invalid Credentials!');
    }
  };

  return (
    <div className="LoginPage" onSubmit={handleSubmit}>
        <header className="header-footer">Log In</header>
        <form method='POST' className="form-horizontal"  >
          <div className="form-group">
            <div className="col-sm-12">
              <input type="email" className="form-control" placeholder="Email" value={state.email} name="email" onChange={handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="password" className="form-control" placeholder="Password" value={state.pw} name="pw" onChange={handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 text-center">
              <button type='submit' className="btn btn-default">Log In</button>&nbsp;&nbsp;&nbsp;
              <Link to='/'>Cancel</Link>
            </div>
          </div>
        </form>
      </div>
    );
  }


export default LoginPage;

