import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import './styles.css';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

export default function Profile() {
  const history = useHistory();

  const [incidents, setIncidents] = useState([]);
  const ngoName = localStorage.getItem('ngoName');
  const ngoId = localStorage.getItem('ngoId');
  const token = localStorage.getItem('be-the-hero:token');
  const authorization = `Bearer ${token}`;

  function handleLogout() {
    localStorage.clear();
    history.push('/');
  }

  async function handleDeleteIncident(id) {
    api.delete(`incidents/${id}`, {
      headers: {
        Authorization: authorization
      }
    }).then(response => setIncidents(incidents.filter(incident => incident.id !== id))
    ).catch(err => alert(err));
  }

  useEffect(() => {
    api.get('profile', {
      headers: {
        Authorization: authorization
      }
    })
      .then(response => {
        setIncidents(response.data.incidents);
      })
      .catch()
  }, [ngoId]);


  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero" />
        <span>Welcome, {ngoName}</span>

        <Link className="button" to="/incidents/new">Register new cause</Link>
        <button type="button" onClick={handleLogout}>
          <FiPower size={18} color="#e02041" />
        </button>
      </header>

      <h1>Registered Causes</h1>

      <ul>
        {incidents.map(incident =>
        (
          <li key={incident.id} >
            <strong>CAUSE:</strong>
            <p>{incident.title}</p>

            <strong>DESCRIPTION:</strong>
            <p>{incident.description}</p>

            <strong>VALUE:</strong>
            <p>{Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(incident.value)}</p>

            <button onClick={() => handleDeleteIncident(incident.id)} type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        )
        )}
      </ul>
    </div>
  );
}