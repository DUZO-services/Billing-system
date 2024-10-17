import React, { useState } from 'react';
import axios from 'axios';

const InvoiceForm = () => {
const [name, setName] = useState('');
const [amount, setAmount] = useState(0);

const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/api/invoices', { name, amount })
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error);
    });
};

return (
    <div>
    <h2>Create Invoice</h2>
    <form onSubmit={handleSubmit}>
        <label>
        Name:
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <label>
        Amount:
        <input type="number" value={amount} onChange={(event) => setAmount(event.target.value)} />
        </label>
        <button type="submit">Create Invoice</button>
    </form>
    </div>
);
};

export default InvoiceForm;