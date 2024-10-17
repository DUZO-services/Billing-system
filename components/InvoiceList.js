import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InvoiceList = () => {
const [invoices, setInvoices] = useState([]);

useEffect(() => {
    axios.get('/api/invoices')
    .then(response => {
        setInvoices(response.data);
    })
    .catch(error => {
        console.error(error);
    });
}, []);

return (
    <div>
    <h2>Invoices</h2>
    <ul>
        {invoices.map(invoice => (
        <li key={invoice._id}>
            <span>{invoice.name}</span>
            <span>{invoice.amount}</span>
        </li>
        ))}
    </ul>
    </div>
);
};

export default InvoiceList;