import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../src/utils/userService';
import { useNavigate } from 'react-router-dom';


//create function component
const SignupPage = (props) => {
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
    passwordConf: '',
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
      userService.signup(state);
      props.handleSignupOrLogin();
      props.history.push('/');
    } catch (err) {


      alert('Invalid Credentials!');
    }
  };

  return (
<div className="SignupForm">
        <header className="header-footer">Sign Up</header>
        <form className="form-horizontal" onSubmit={handleSubmit} >
        
          <div className="form-group">
            <div className="col-sm-12">
              <input type="text" className="form-control" placeholder="Name" value={state.name} name="name" onChange={handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="text" className="form-control" placeholder="Email" value={state.email} name="email" onChange={handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="text" className="form-control" placeholder="Password" value={this.state.password} name="password" onChange={handleChange} />
            </div>
          </div>
           <div className="form-group">
          <div className="col-sm-12">
              <input type="text" className="form-control" placeholder="Confirm Password" value={state.passwordConf} name="passwordconf" onChange={handleChange} />
            </div>
          </div> 

          <button>Sign Up</button>
              <Link to='/'>Cancel</Link>
              </form> 
            </div>
    
    
    );
  }
       

      

export default SignupPage;
         