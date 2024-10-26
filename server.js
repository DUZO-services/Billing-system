const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Welcome to the billing system!');
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});