require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

app.post('/', (req, res) => {
    const data = req.body;
    console.log(data);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});