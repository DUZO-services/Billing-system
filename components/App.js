import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import InvoiceList from './InvoiceList';
import InvoiceForm from './InvoiceForm';
import InvoiceDetail from './InvoiceDetail';

const App = () => {
return (
    <BrowserRouter>
    <Switch>
        <Route path="/" exact component={InvoiceList} />
        <Route path="/create" component={InvoiceForm} />
        <Route path="/:id" component={InvoiceDetail} />
    </Switch>
    </BrowserRouter>
);
};

export default App;