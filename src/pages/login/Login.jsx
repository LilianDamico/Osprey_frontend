import React, { useState } from 'react';
import Head from '../../components/head/Head';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');


  const navigate = useNavigate();


  async function login(event){
    event.preventDefault();

    const data = {
      email, password
    };

    try{

      const response = await api.post('https://localhost:7218/',data);

      localStorage.setIten('email', email);
      localStorage.setIten('token', response.data.token);
      localStorage.setIten('expiration', response.data.expiration);

      navigate.push('/management');

    }
    catch(error){
      alert('Falha no login.' + error)
    }

  }

  return (
    <div>
      <Head />
      
      <div className='login-container'>
        <section className='form'>
          <form onSubmit={login}>
            <h3>Login</h3>


            <input type='email' placeholder='E-mail'
              value={email}
              onChange={e=>setEmail(e.target.value)}            
            />


            <input type='password' placeholder='Password'
              value={password}
              onChange={e=>setpassword(e.target.value)}
            />


            <button type='submit' className='button'>Enviar</button>
          </form>
          <div>
          <li>
          <Link to="/cadastro">Cadastre-se!</Link>
        </li>
          </div>

        </section>

      </div>
    </div>
  )
}

export default Login;