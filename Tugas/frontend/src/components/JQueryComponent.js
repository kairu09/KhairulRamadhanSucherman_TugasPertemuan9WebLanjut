import React, { useState, useEffect } from 'react';
/* global $ */

function JQueryComponent() {
  const [formData, setFormData] = useState({ nama: '', prodi: '' });
  const [response, setResponse] = useState('');

  useEffect(() => {
    // Load jQuery dynamically
    const script = document.createElement('script');
    script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
    document.body.appendChild(script);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    $.ajax({
      url: 'http://localhost:3001/mahasiswa',
      type: 'POST',
      data: formData,
      success: (data) => setResponse(`Data tersimpan! ID: ${data.id}`),
      error: (err) => setResponse("Error: " + err.responseText)
    });
  };

  return (
    <div className="component">
      <h3>Menggunakan jQuery AJAX</h3>
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
        <button type="submit">Kirim (jQuery)</button>
      </form>
      <p className="response">{response}</p>
    </div>
  );
}

export default JQueryComponent;