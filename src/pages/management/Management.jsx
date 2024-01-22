import React, { useState, useEffect, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import Head from '../../components/head/Head';

const Management = () => {
  const [client, setClient] = useState('');
  const [management, setManagement] = useState([]);
  
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const authorization = useMemo(() => {
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  }, [token]);

  useEffect(() => {
    const fetchData = async () => {
      // Verifica se o token existe antes de fazer a requisição
      if (!token) {
        // Se o token não existe, redireciona para a página de login
        navigate('/login');
        return; // Não executa o restante do useEffect
      }
  
      try {
        const response = await api.get('api/management', authorization);
        setManagement(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados de gerenciamento:', error.message);
      }
    };
  
    fetchData();
  }, [authorization, navigate, token]);
  

  const handleFilter = async () => {
    try {
      const response = await api.get(`api/management?client=${client}`, authorization);
      setManagement(response.data);
    } catch (error) {
      console.error('Erro ao filtrar dados de gerenciamento:', error.message);
    }
  };

  return (
    <div>
      <Head />
      <div className='management-container'>
        <h3>Operações Registradas</h3>
        <button><Link className='button' to="/newrecord">Novo Registro</Link></button>
        
        <form onSubmit={(e) => { e.preventDefault(); handleFilter(); }}>
          <input
            type='text'
            placeholder='Client'
            value={client}
            onChange={(e) => setClient(e.target.value)}
          />
          <button type="submit">Filtrar por nome</button>
        </form>

        <h3>Listagem de Clientes</h3>
        <ul>
          {management.map((operation) => (
            <li key={operation.id}>
              <b>Client:</b> {operation.client}<br/>
              <b>Bill of Lading:</b> {operation.billoflading}<br/>
              <b>Container Type:</b> {operation.containertype}<br/>
              <b>Container Identity:</b> {operation.containeridentity}<br/>
              <b>Weight:</b> {operation.weight}<br/>
              <b>Movement Type:</b> {operation.movementtype}<br/>
              <b>Transport Mode:</b> {operation.transportmode}<br/>
              <b>Transport Identification:</b> {operation.transportidentification}<br/>
              <b>Arrival Date:</b> {operation.arrivaldate}<br/>
              <b>Departure Date:</b> {operation.departuredate}<br/>
              <button>Editar</button>
              <button>Excluir</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Management;


