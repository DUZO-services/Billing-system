const express = require('express');
const router = express.Router();
const Invoice = require('../models/invoice');

router.get('/', async (req, res) => {
try {
    const invoices = await Invoice.find().exec();
    res.json(invoices);
} catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error retrieving invoices' });
}
});

router.post('/', async (req, res) => {
try {
    const invoice = new Invoice(req.body);
    await invoice.save();
    res.json(invoice);
} catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating invoice' });
}
});

router.get('/:id', async (req, res) => {
try {
    const invoice = await Invoice.findById(req.params.id).exec();
    if (!invoice) {
    res.status(404).json({ message: 'Invoice not found' });
    } else {
    res.json(invoice);
    }
} catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error retrieving invoice' });
}
});

router.put('/:id', async (req, res) => {
try {
    const invoice = await Invoice.findByIdAndUpdate(req.params.id, req.body, { new: true }).exec();
    res.json(invoice);
} catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error updating invoice' });
}
});

router.delete('/:id', async (req, res) => {
try {
    await Invoice.findByIdAndRemove(req.params.id).exec();
    res.json({ message: 'Invoice deleted' });
} catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error deleting invoice' });
}
});

module.exports = router;