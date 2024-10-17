// backend/models/Invoice.js
import mongoose from 'mongoose';

const invoiceSchema = new mongoose.Schema({
name: {
    type: String,
    required: true,
},
amount: {
    type: Number,
    required: true,
},
}, { timestamps: true });

const Invoice = mongoose.model('Invoice', invoiceSchema);
export default Invoice;