const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/checkPhoneFormat', (req, res) => {
    let phone = req.query.phone;
    const regex = /^\d{3}-\d{3}-\d{4}$/;
    let isValid = regex.test(phone);
    res.json({ isValid });
});

app.listen(3000, () => {
    console.log('Server running on http://127.0.0.1:3000');
});