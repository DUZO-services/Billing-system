import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InvoiceDetail = ({ match }) => {
const [invoice, setInvoice] = useState({});

useEffect(() => {
    axios.get(`/api/invoices/${match.params.id}`)
    .then(response => {
        setInvoice(response.data);
    })
    .catch(error => {
        console.error(error);
    });
}, [match.params.id]);

return (
    <div>
    <h2>Invoice Detail</h2>
    <p>Name: {invoice.name}</p>
    <p>Amount: {invoice.amount}</p>
    </div>
);
};

export default InvoiceDetail;