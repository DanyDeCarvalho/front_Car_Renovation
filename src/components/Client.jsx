import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Client() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    async function fetchClients() {
      try {
        const response = await axios.get('http://localhost:8975/api/client/getAll');
        setClients(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchClients();
  }, []);

  return (
    <div className='h-screen bg-slate-200'>
      <h1 className='text-red-500'>Client</h1>
      <table className='text-red-500 w-full border-black'>
        {clients.map((client) => (
            <div key={client.id}>
            <tr>
                <td className='w-2/12 border-black'>{client.name}</td>
                <td className='w-2/12'>{client.teelephone}</td>
                <td className='w-2/12'>{client.adresse.street}{client.adresse.code_postal}{client.adresse.city}</td>
            </tr>
            </div>
        ))}
      </table>
    </div>
  );
}

export default Client;
