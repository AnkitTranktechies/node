const express = require('express');
const cors = require('cors'); 
const path = require('path');
const mysql = require('mysql');
const employeeController = require('./controllers/employeeController');

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, 'client/build')));
app.get('/api', employeeController.getAllEmployees);
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
