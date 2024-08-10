const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'yourUser',
    password: 'yourPassword',
    database: 'legitimate_urls_db'
});

db.connect(err => {
    if (err) throw err;
    console.log('Connected to the MySQL Server!');
});

app.post('/checkURL', (req, res) => {
    const { url } = req.body;
    db.query('SELECT COUNT(*) AS count FROM legitimate_urls WHERE url = ?', [url], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Database error');
        } else {
            const isLegitimate = results[0].count > 0;
            res.send({ isLegitimate });
        }
    });
});

app.listen(3000, () => console.log('Server running on port 3000'));
