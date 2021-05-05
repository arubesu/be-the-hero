import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi';

import './styles.css';
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

import api from '../../services/api';

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    api.post('sessions', { email, password })
      .then(response => {
        const { user, token } = response.data;
        localStorage.setItem('ngoId', user.id);
        localStorage.setItem('ngoemail', user.email);
        localStorage.setItem('ngoName', user.name);
        localStorage.setItem('be-the-hero:token', token);
        history.push('/profile');
      })
      .catch(err => alert(err));
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero" />
        <form onSubmit={handleLogin} >
          <input
            placeholder="E-mail"
            onChange={e => setEmail(e.target.value)}
          />
          <input
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
          />
          <button className="button" type="submit">Log In</button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#e02041" />
            Create new account
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt="Heroes" />
    </div>
  )
}