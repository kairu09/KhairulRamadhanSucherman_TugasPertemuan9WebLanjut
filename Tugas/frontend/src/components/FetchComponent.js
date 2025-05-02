import React, { useState } from 'react';

function FetchComponent() {
  const [formData, setFormData] = useState({ nama: '', prodi: '' });
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3001/mahasiswa', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      setResponse(`Data tersimpan! ID: ${data.id}`);
    } catch (error) {
      setResponse("Error: " + error.message);
    }
  };

  return (
    <div className="component">
      <h3>Menggunakan Fetch API</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nama"
          value={formData.nama}
          onChange={(e) => setFormData({...formData, nama: e.target.value})}
          required
        />
        <input
          type="text"
          placeholder="Prodi"
          value={formData.prodi}
          onChange={(e) => setFormData({...formData, prodi: e.target.value})}
          required
        />
        <button type="submit">Kirim (Fetch)</button>
      </form>
      <p className="response">{response}</p>
    </div>
  );
}

export default FetchComponent;