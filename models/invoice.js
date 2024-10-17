const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
    customer: {
    name: { type: String, required: true },
    address: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    // ... (other customer details)
    },
    invoiceDate: { type: Date, required: true },
    dueDate: { type: Date, required: true },
    total: { type: Number, required: true },
    status: {
    type: String,
    required: true,
    enum: ['pending', 'paid', 'overdue']
    },
    items: [
    {
        product: { type: String, required: true },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
        tax: { type: Number, required: true }
        // ... (other item details)
    }
    ]
});

const Invoice = mongoose.model('Invoice', invoiceSchema);

module.exports = Invoice;