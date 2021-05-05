import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';
import logoImg from '../../assets/logo.svg';

import api from '../../services/api';

export default function NewIncident() {
  const history = useHistory();
  const token = localStorage.getItem('be-the-hero:token');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const authorization = `Bearer ${token}`;

  async function handleCreateNewIncident(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      value
    };

    api.post('incidents',
      data,
      {
        headers: {
          Authorization: authorization
        }
      }).then(response => {
        alert('Incident Created')
        history.push('/profile');
      })
      .catch(err => alert('Error'));
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />
          <h1>Register new cause</h1>
          <p>Describe the cause in detail to find a hero to help</p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#e02041" />
            Back
          </Link>
        </section>
        <form onSubmit={handleCreateNewIncident}>
          <input
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            placeholder="Value"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          <button className="button" type="submit">Register</button>
        </form>
      </div>
    </div>
  )
}