const mongoose = require('mongoose');

const quotationSchema = new mongoose.Schema({
    customerName: {
        type: String,
        required: true
    },
    quotationDate: {
        type: Date,
        required: true
    },
    expirationDate: {
        type: Date,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['pending', 'accepted', 'rejected']
    }
});

const Quotation = mongoose.model('Quotation', quotationSchema);

module.exports = Quotation;