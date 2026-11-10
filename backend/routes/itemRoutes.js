const express = require('express');
const router = express.Router();
const User = require('../models/item');

router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({pesan: err.message});
    }
});

router.post('/users', async (req, res) => {
    const userBaru = new User({
        nama: req.body.nama,
        email: req.body.email
    });

    try {
        const simpanUser = await userBaru.save();
        res.status(201).json(simpanUser);
    } catch (err) {
        res.status(400).json({ pesan: err.message });
    }
});

router.put('/users/:id', async (req, res) => {
    try {
        const userDiperbarui = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json(userDiperbarui);
    } catch (err) {
        res.status(400).json({pesan: err.message});
    }
});
    
router.delete('/users/:id', async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({pesan:'User berhasil dihapus'});
    } catch (err) {
        res.status(400).json({pesan: err.message});
    }
});

module.exports = router;