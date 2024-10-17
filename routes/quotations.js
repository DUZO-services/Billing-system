const express = require('express');
const router = express.Router();
const Quotation = require('../models/quotation'); // Make sure this model exists

// Get all quotations
router.get('/', async (req, res) => {
try {
    const quotations = await Quotation.find().exec();
    res.json(quotations);
} catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error retrieving quotations' });
}
});

// Create a new quotation
router.post('/', async (req, res) => {
try {
    const quotation = new Quotation(req.body);
    await quotation.save();
    res.status(201).json(quotation);
} catch (err) {
    console.error(err);
    res.status(400).json({ message: 'Error creating quotation' });
}
});

// Get a single quotation by ID
router.get('/:id', async (req, res) => {
try {
    const quotation = await Quotation.findById(req.params.id).exec();
    if (!quotation) {
    return res.status(404).json({ message: 'Quotation not found' });
    }
    res.json(quotation);
} catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error retrieving quotation' });
}
});

// Update a quotation by ID
router.put('/:id', async (req, res) => {
try {
    const updatedQuotation = await Quotation.findByIdAndUpdate(req.params.id, req.body, { new: true }).exec();
    if (!updatedQuotation) {
    return res.status(404).json({ message: 'Quotation not found' });
    }
    res.json(updatedQuotation);
} catch (err) {
    console.error(err);
    res.status(400).json({ message: 'Error updating quotation' });
}
});

// Delete a quotation by ID
router.delete('/:id', async (req, res) => {
try {
    const deletedQuotation = await Quotation.findByIdAndDelete(req.params.id).exec();
    if (!deletedQuotation) {
    return res.status(404).json({ message: 'Quotation not found' });
    }
    res.json({ message: 'Quotation deleted' });
} catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error deleting quotation' });
}
});

module.exports = router;