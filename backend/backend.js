const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const itemRoutes = require('./routes/itemRoutes');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', itemRoutes);

app.get('/', (req, res) => {
    res.send('API KampusHub  Backend Berjalan');
});

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL)
    .then(() => {
        console.log('berhasil terhubung ke MOngoDB');
        app.listen(PORT, () => {
            console.log(`Server backend berjalan di http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Koneksi MongoDB gagal:', err.message);
    });
