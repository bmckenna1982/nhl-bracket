import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
// import AppContext from '../context/appContext'
import './login.css'

// import AuthApiService from '../services/auth-api-services';

class Login extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => { }
    }
  };

  // static contextType = AppContext
  state = { error: null };

  handleLoginSuccess = (user_id) => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || '/home';
    history.push(destination)
  }

  handleSubmitJwtAuth = ev => {
    ev.preventDefault();
    this.setState({ error: null });
    const { email, password } = ev.target;
    // AuthApiService.postLogin({
    //   email: email.value.toLowerCase(),
    //   password: password.value
    // })
    //   .then(res => {
    //     email.value = '';
    //     password.value = '';
    //     this.handleLoginSuccess();
    //   })
    //   .catch(res => {
    //     this.setState({ error: res.error });
    //   });
  };


  render() {
    const { error } = this.state;
    return (
      <section className='log-in background-section'>
        <p>To Demo the app login with user: demo@demo.com and password: Demo123!</p>
        <form className='log-in-form' onSubmit={this.handleSubmitJwtAuth}>
          <div role='alert'>{error && <p className='red'>{error}</p>}</div>
          <legend>Log in to your account</legend>
          <div>
            <input type='text' name='email' id='email' placeholder='Email' />
          </div>
          <div>
            <input type='password' name='password' id='password' placeholder='Password' />
          </div>
          <button className='bttn' type='submit'>Log in</button>
          <div>
            Register for an account here:
            <NavLink to='/register'>Register</NavLink>
          </div>
        </form>
      </section>
    );
  }
}

export default Login