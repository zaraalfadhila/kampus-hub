const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: [true, 'Nama wajib diisi']
        },
    email: {
        type: String,
        required: [true, 'Email wajib diisi'],
        unique: true
    }
});

module.exports = mongoose.model('User', userSchema);