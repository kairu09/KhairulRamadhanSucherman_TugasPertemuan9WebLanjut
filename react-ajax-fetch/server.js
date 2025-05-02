const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');

const app = express();
const PORT = 3000;
const MONGO_URL = 'mongodb://localhost:27017';
const DB_NAME = 'web_lanjut';

app.use(cors());
app.use(bodyParser.json());

// Endpoint untuk menerima data dari Fetch API / jQuery AJAX
app.post('/submit', async (req, res) => {
    const { nama, prodi } = req.body;
    
    try {
        const client = await MongoClient.connect(MONGO_URL);
        const db = client.db(DB_NAME);
        
        // Simpan ke database
        await db.collection('mahasiswa').insertOne({ nama, prodi });
        
        client.close();
        
        res.json({ 
            success: true,
            message: `Halo ${nama}, prodi kamu adalah ${prodi}. Data tersimpan di database!`
        });
    } catch (error) {
        res.status(500).json({ 
            success: false,
            message: "Gagal menyimpan data: " + error.message 
        });
    }
});

// Jalankan server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});