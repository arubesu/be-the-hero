import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import './styles.css';
import logoImg from '../../assets/logo.svg';

import api from '../../services/api';

export default function Register() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [whatsapp, setWhatsApp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUF] = useState('');

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      password,
      whatsapp,
      city,
      state: uf
    };

    api.post('ngos', data)
      .then(response => {
        history.push('/');
      })
      .catch(err => alert(err));
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />
          <h1>Register</h1>
          <p>Register your NGO, enter the platform and help people find
          Cases of your NGO.
          </p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#e02041" />
            I'm already registered
          </Link>

        </section>
        <form onSubmit={handleRegister}>
          <input
            placeholder="NGO Name"
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <input
            placeholder="E-mail"
            type="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <input
            placeholder="WhatsApp"
            value={whatsapp}
            onChange={e => setWhatsApp(e.target.value)}
          />

          <div className="input-group">
            <input
              placeholder="City"
              value={city}
              onChange={e => setCity(e.target.value)}
            />

            <input
              placeholder="ST"
              style={{ width: 80 }}
              maxLength={2}
              minLength={2}
              value={uf}
              onChange={e => setUF(e.target.value)}
            />
          </div>

          <button className="button" type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}