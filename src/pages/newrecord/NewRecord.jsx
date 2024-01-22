import React from 'react';
import Head from '../../components/head/Head';
import { Link, useParams } from 'react-router-dom';

function NewRecord() {

  const {Id} = useParams();



  return (
    <div>
      <Head />
      <div>
        <h3>{Id === '0'? 'Atualizar Registro' : 'Incluir Novo Registro' } </h3>
        <section>
          <form>
            <input placeholder="Id" />
            <input placeholder="Client"/>
            <input placeholder="Bill of Lading"/>
            <input placeholder="Container Type"/>
            <input placeholder="Container Identity"/>
            <input placeholder="Weight"/>
            <input placeholder="Movement Type"/>
            <input placeholder="Transport Mode"/>
            <input placeholder="Transport Identification"/>
            <input placeholder="Arrival"/>
            <input placeholder="Departure"/>
            <button>{Id === '0'? 'Atualizar' : 'Incluir' }</button>
          </form>
        </section>
        <button><Link className='button' to="/management">Retornar</Link></button>
      </div>
    </div>
  )
}

export default NewRecord;