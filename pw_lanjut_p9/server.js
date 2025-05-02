const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('fe'));

app.post('/submit', (req, res) => {
    const { nama, prodi } = req.body;
    res.json({ message: `Halo ${nama}, prodi kamu adalah ${prodi}.` });
});

app.listen(3000, () => {
    console.log('Server berjalan di http://localhost:3000');
});