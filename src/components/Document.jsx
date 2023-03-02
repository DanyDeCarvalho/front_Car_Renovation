import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Document() {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    async function fetchDocuments() {
      try {
        const response = await axios.get('http://localhost:8975/api/document/getAll');
        setDocuments(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchDocuments();
  }, []);

  return (
    <div className='h-screen bg-slate-200'>
      <h1 className='text-red-500'>Liste des factures</h1>
      <table className='text-red-500 w-full border-black'>
      <tr>
          <td className='w-2/12'>Nom</td>
          <td className='w-2/12'>Date</td>
          <td className='w-2/12'>Client</td>
          <td className='w-1/12'>Tva</td>
          <td className='w-2/12'>Montant</td>
        </tr>
        {documents.map((document) => (
            <div key={document.id}>
            <tr className='w-full'>
                <td className='w-2/12 border-black'>{document.name}</td>
                <td className='w-2/12'>{document.date_document}</td>
                <td className='w-2/12'><a href='/client'>{document.client.name}</a></td>
                <td className='w-1/12'>{document.tva}</td>
                <td className='w-2/12'>{document.montant} €</td>
            </tr>
            </div>
        ))}
      </table>
    </div>
  );
}

export default Document;
