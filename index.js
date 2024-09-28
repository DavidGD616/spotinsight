require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 8888;

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, () => {
    console.log(`Express app listening at http://localhost:${PORT}`);
})