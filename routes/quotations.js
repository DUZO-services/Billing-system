const express = require('express');
const router = express.Router();
const Quotation = require('../models/quotation');

router.get('/', async (req, res) => {
try {
    const quotations = await Quotation.find().exec();
    res.json(quotations);
} catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error retrieving quotations' });
}
});

router.post('/', async (req, res) => {
try {
    const quotation = new Quotation(req.body);
    await quotation.save();
    res.json(quotation);
} catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating quotation' });
}
});

router.get('/:id', async (req, res) => {
try {
    const quotation = await Quotation.findById(req.params.id).exec();
    if (!quotation) {
    res